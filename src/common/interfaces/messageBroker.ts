import { QueueTypes } from '../enums';
import { HandlerType } from '../types';

export interface IQueueHandler {
	queue: QueueTypes;
	handler: HandlerType;
}
