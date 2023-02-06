import { QueueHandler } from '../common/classes';
import { QueueTypes } from '../common/enums';
import { demoHandler } from './demo.service';

export const demoController = new QueueHandler(QueueTypes.DEMO, demoHandler);
