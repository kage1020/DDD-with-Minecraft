import { BlockPos } from '@/abstract/Domain/Block/BlockPos/BlockPos';
import { Material } from '@/abstract/Domain/Material/Material';

export abstract class Block {
  private readonly _blockName: string;
  private readonly _hardness: number;
  private readonly _resistance: number;
  private readonly _material: Material;
  // @ts-expect-error
  private _pos: BlockPos;

  protected constructor(
    blockName: string,
    hardness: number,
    resistance: number,
    material: Material
  ) {
    this._blockName = blockName;
    this._hardness = hardness;
    this._resistance = Math.max(resistance * 3, hardness * 5, 0);
    this._material = material;
  }

  public get blockName(): string {
    return this._blockName;
  }

  public get hardness(): number {
    return this._hardness;
  }

  public get resistance(): number {
    return this._resistance;
  }

  public get pos(): BlockPos {
    return this._pos;
  }

  public set pos(pos: BlockPos) {
    this._pos = pos;
  }

  public get material(): Material {
    return this._material;
  }
}
