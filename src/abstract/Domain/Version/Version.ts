export const Version = {} as const;

export type ValidVersion = (typeof Version)[keyof typeof Version] | string;
