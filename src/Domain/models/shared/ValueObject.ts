import { isEqual } from 'lodash';

export abstract class ValueObject<T, U> {
  // @ts-expect-error
  private _type: U;
  protected readonly _value: T;

  protected constructor(value: T) {
    this._value = value;
  }

  protected equals(object: ValueObject<T, U>): boolean {
    return isEqual(this._value, object._value);
  }
}
