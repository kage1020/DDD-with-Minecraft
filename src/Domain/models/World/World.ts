import { DomainEventStorable } from '@/Domain/shared/DomainEvent/DomainEventStorable';
import { WorldId } from '@/Domain/models/World/WorldId/WorldId';

export class World extends DomainEventStorable {
  private readonly _worldId: WorldId;

  private constructor(worldId: WorldId) {
    super();
    this._worldId = worldId;
  }
}
