import { Version as Base } from '@/abstract/Domain/Version/Version';

export const Version = {
  ...Base,
  MINECRAFT_1_0: '1.0',
} as const;

export type ValidVersion = (typeof Version)[keyof typeof Version];
