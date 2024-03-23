import { ValueObject } from '@/Domain/models/shared/ValueObject';

export type BlockIdValue = string;

export class BlockId extends ValueObject<BlockIdValue, 'BookId'> {
  private constructor(value: BlockIdValue) {
    super(value);
  }

  get value(): BlockIdValue {
    return this._value;
  }
}
