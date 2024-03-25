import { Material as Base } from '@/abstract/Domain/Material/Material';

export class Material extends Base {
  public static readonly air: Material = new Material();
  public static readonly grass: Material = new Material();
  public static readonly ground: Material = new Material();
  public static readonly wood: Material = new Material();
  public static readonly rock: Material = new Material();
  public static readonly iron: Material = new Material();
  public static readonly water: Material = new Material();
  public static readonly lava: Material = new Material();
  public static readonly leaves: Material = new Material();
  public static readonly plants: Material = new Material();
  public static readonly vine: Material = new Material();
  public static readonly sponge: Material = new Material();
  public static readonly cloth: Material = new Material();
  public static readonly fire: Material = new Material();
  public static readonly sand: Material = new Material();
  public static readonly circuits: Material = new Material();
  public static readonly glass: Material = new Material();
  public static readonly tnt: Material = new Material();
  public static readonly foliage: Material = new Material();
  public static readonly ice: Material = new Material();
  public static readonly snow: Material = new Material();
  public static readonly craftedSnow: Material = new Material();
  public static readonly cactus: Material = new Material();
  public static readonly clay: Material = new Material();
  public static readonly pumpkin: Material = new Material();
  public static readonly dragonEgg: Material = new Material();
  public static readonly portal: Material = new Material();
  public static readonly cake: Material = new Material();
  public static readonly web: Material = new Material();
  public static readonly piston: Material = new Material();

  public constructor() {
    super();
  }
}
