import { DomainEventStorable } from '@/Domain/shared/DomainEvent/DomainEventStorable';
import { BlockId } from '@/Domain/models/Block/BlockId/BlockId';

export class Block extends DomainEventStorable {
  private readonly _blockId: BlockId;

  private constructor(blockId: BlockId) {
    super();
    this._blockId = blockId;
  }

  get blockId(): BlockId {
    return this._blockId;
  }
}
