import { ValueObject } from '@/abstract/Domain/shared/ValueObject';

export type BlockPosValue = {
  minX: number;
  minY: number;
  minZ: number;
  maxX: number;
  maxY: number;
  maxZ: number;
};

export abstract class BlockPos extends ValueObject<BlockPosValue, 'BlockPos'> {
  protected constructor(
    minX: number,
    minY: number,
    minZ: number,
    maxX: number,
    maxY: number,
    maxZ: number
  ) {
    super({ minX, minY, minZ, maxX, maxY, maxZ });
  }
}
