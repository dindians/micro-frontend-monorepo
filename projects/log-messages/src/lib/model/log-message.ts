import {LogLevel} from "./log-level";

export class LogMessage {
  constructor(readonly message: string, readonly logLevel: LogLevel, readonly dateTime: Date, readonly source?: string) {}

  static areEqual(one: LogMessage, other: LogMessage): boolean {
    return one.dateTime === other.dateTime;
  }}
