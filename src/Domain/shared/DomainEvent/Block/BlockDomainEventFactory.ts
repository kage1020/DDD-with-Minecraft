import { Block } from '@/Domain/models/Block/Block';
import { DomainEvent } from '@/Domain/shared/DomainEvent/DomainEvent';
import { BlockDomainEvent } from '@/Domain/shared/DomainEvent/Block/BlockDomainEvent';

export type BlockDomainEventBody = {
  blockId: string;
};

export class BlockDomainEventFactory {
  private _block: Block;

  private constructor(block: Block) {
    this._block = block;
  }

  public createEvent(eventName: BlockDomainEvent): DomainEvent<BlockDomainEventBody> {
    return DomainEvent.create(this.toEventBody(), eventName);
  }

  private toEventBody(): BlockDomainEventBody {
    return {
      blockId: this._block.blockId.value,
    };
  }
}
