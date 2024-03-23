import { Versions } from '@/Domain/models/Version/Versions/Versions';

export class Version {
  private readonly _value: string;

  public constructor(value: Versions) {
    if (!Version.isValid(value)) throw new Error('Invalid version!');
    this._value = value;
  }

  public static isValid(version: string): boolean {
    return Object.values(Versions).some((v) => v === version);
  }
}
