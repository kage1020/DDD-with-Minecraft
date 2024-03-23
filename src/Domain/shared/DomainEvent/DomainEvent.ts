import { createId } from '@paralleldrive/cuid2';

export class DomainEvent<T extends Record<string, unknown> = Record<string, unknown>> {
  public readonly eventId: string;
  public readonly eventBody: T;
  public readonly eventName: string;
  public readonly occurredAt: Date;

  private constructor(eventId: string, eventBody: T, eventName: string, occurredAt: Date) {
    this.eventId = eventId;
    this.eventBody = eventBody;
    this.eventName = eventName;
    this.occurredAt = occurredAt;
  }

  static create<T extends Record<string, unknown>>(
    eventBody: T,
    eventName: string
  ): DomainEvent<T> {
    return new DomainEvent<T>(createId(), eventBody, eventName, new Date());
  }

  static reconstruct<T extends Record<string, unknown>>(
    eventId: string,
    eventBody: T,
    eventName: string,
    occurredAt: Date
  ): DomainEvent<T> {
    return new DomainEvent<T>(eventId, eventBody, eventName, occurredAt);
  }
}
