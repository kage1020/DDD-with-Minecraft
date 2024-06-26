import type { ValidVersion as Version } from '@/abstract/Domain/Version/Version';

export abstract class Minecraft {
  private _version: Version;

  protected constructor(version: Version) {
    if (!this.isValidVersion(version)) {
      throw new Error('Invalid version!');
    }
    this._version = version;
  }

  protected get version(): Version {
    return this._version;
  }

  protected abstract isValidVersion(version: Version): boolean;
}
