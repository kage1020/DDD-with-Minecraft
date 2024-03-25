import { Block as Base } from '@/abstract/Domain/Block/Block';
import { Material } from '@/implements/1.0/Material';

export class Block extends Base {
  public static readonly stone = new Block('stone', 1.5, 10, new Material());

  protected constructor(
    blockName: string,
    hardness: number,
    resistance: number,
    material: Material
  ) {
    super(blockName, hardness, resistance, material);
  }
}
