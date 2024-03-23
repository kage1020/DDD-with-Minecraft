import { DomainEvent } from '@/Domain/shared/DomainEvent/DomainEvent';

export abstract class DomainEventStorable {
  private domainEvents: DomainEvent[] = [];

  protected addDomainEvent(domainEvent: DomainEvent) {
    this.domainEvents.push(domainEvent);
  }

  public getDomainEvents(): DomainEvent[] {
    return this.domainEvents;
  }

  public clearDomainEvent() {
    this.domainEvents = [];
  }
}
