import { isEqual } from 'lodash';

export abstract class ValueObject<T, U> {
  // @ts-expect-error
  private _type: U;
  protected readonly _value: T;

  protected constructor(value: T) {
    if (!this.isValid(value)) {
      throw new Error('Invalid value!');
    }
    this._value = value;
  }

  protected abstract isValid(value: T): boolean;

  protected isEqual(object: ValueObject<T, U>): boolean {
    return isEqual(this._value, object._value);
  }
}
