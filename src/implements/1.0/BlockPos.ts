import { BlockPos as Base, BlockPosValue } from '@/abstract/Domain/Block/BlockPos/BlockPos';

export class BlockPos extends Base {
  protected constructor(
    minX: number,
    minY: number,
    minZ: number,
    maxX: number,
    maxY: number,
    maxZ: number
  ) {
    super(minX, minY, minZ, maxX, maxY, maxZ);
  }

  protected isValid(blockPos: BlockPosValue): boolean {
    if (
      blockPos.minX > blockPos.maxX ||
      blockPos.minY > blockPos.maxY ||
      blockPos.minZ > blockPos.maxZ ||
      blockPos.minY < 0
    ) {
      return false;
    }
    return true;
  }
}
