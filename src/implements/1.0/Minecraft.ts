import { Minecraft as Base } from '@/abstract/Domain/Minecraft/Minecraft';
import { Version as Versions } from '@/implements/1.0/Version';
import type { ValidVersion } from '@/implements/1.0/Version';

export class Minecraft extends Base {
  public constructor(version: ValidVersion) {
    super(version);
  }

  protected isValidVersion(version: ValidVersion): boolean {
    return Object.values(Versions).some((v) => v === version);
  }
}
