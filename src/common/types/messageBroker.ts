import { ConsumeMessage, Message } from 'amqplib';

export type AckType = (message: Message, allUpTo?: boolean) => void;
export type ReturnHandlerType = (msg: ConsumeMessage | null) => void;

export type HandlerType = (ack: AckType) => ReturnHandlerType;
