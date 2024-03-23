import { ValueObject } from '@/Domain/models/shared/ValueObject';

export type WorldIdValue = string;

export class WorldId extends ValueObject<WorldIdValue, 'WorldId'> {
  private constructor(value: WorldIdValue) {
    super(value);
  }
}
