import { Version } from '@/Domain/models/Version/Version';
import { DomainEventStorable } from '@/Domain/shared/DomainEvent/DomainEventStorable';

export class Minecraft extends DomainEventStorable {
  private readonly _version: Version;

  public constructor(version: Version) {
    super();
    this._version = version;
  }
}
