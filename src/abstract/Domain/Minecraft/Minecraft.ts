import { Version } from '@/abstract/Domain/Version/Version';

export abstract class Minecraft {
  private _version: Version;

  public constructor(version: Version) {
    this._version = version;
  }

  public get version(): Version {
    return this._version;
  }
}
