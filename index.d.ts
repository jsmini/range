// https://www.tslang.cn/docs/handbook/declaration-files/by-example.html

/** 组件总数 */
// declare var foo: number;

export function range(from: number, to?: number, step?: number): number[];
export function range(
  from: string,
  to?: string,
  step?: number,
): string[] | number[];
