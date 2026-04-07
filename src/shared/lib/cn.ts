type CnArg = string | false | null | undefined;

export function cn(...args: (CnArg | CnArg[])[]): string {
  return (args.flat() as CnArg[]).filter(Boolean).join(' ');
}
