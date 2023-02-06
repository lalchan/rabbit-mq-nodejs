import { RabbitMQType } from '../../app';
import { QueueTypes } from '../enums/queues';
import { IQueueHandler } from '../interfaces';
import { HandlerType } from '../types/messageBroker';

export class QueueHandler implements IQueueHandler {
	queue: QueueTypes;
	handler: HandlerType;

	constructor(queue: QueueTypes, handler: HandlerType) {
		this.queue = queue;
		this.handler = handler;
	}
	implement(messageBroker: RabbitMQType) {
		messageBroker.listen(this.queue, this.handler);
	}
}
