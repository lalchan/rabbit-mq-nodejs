import Amqp from 'amqplib';
import { HandlerType } from './common/types';
import { Config } from './config/config';

let instance: RabbitMQ | undefined;
export type RabbitMQType = RabbitMQ;
class RabbitMQ {
	private channel: Amqp.Channel;
	private queues: string[];

	constructor(channel: Amqp.Channel) {
		this.queues = [];
		this.channel = channel;
	}

	private createQueueIfDoesNotExist(queue: string) {
		if (this.queues.findIndex((q) => q === queue) === -1) {
			this.channel.assertQueue(queue);
		}
	}

	send(queue: string, message: Buffer) {
		this.createQueueIfDoesNotExist(queue);
		this.channel.sendToQueue(queue, message);
	}

	listen(queue: string, handler: HandlerType) {
		this.createQueueIfDoesNotExist(queue);
		this.channel.consume(
			queue,
			handler(this.channel.ack.bind(this.channel)),
		);
	}
}

export async function getMessageBroker(): Promise<RabbitMQ> {
	if (!instance) {
		const connection = await Amqp.connect(Config.rabbitUrl);
		const channel = await connection.createChannel();
		instance = new RabbitMQ(channel);
	}
	return instance;
}
