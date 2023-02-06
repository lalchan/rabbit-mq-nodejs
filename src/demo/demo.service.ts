import { ConsumeMessage } from 'amqplib';
import { AckType, ReturnHandlerType } from '../common/types';

export function demoHandler(ack: AckType): ReturnHandlerType {
	return (msg: ConsumeMessage | null) => {
		if (!msg) {
			return;
		}
		console.log(msg.content.toString());
		ack(msg);
	};
}
