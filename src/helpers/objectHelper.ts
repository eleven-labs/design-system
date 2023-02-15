export const get = <TObject extends Record<string, unknown>, TValue = unknown, TDefaultValue = unknown>(
  obj: TObject,
  path: string,
  defaultValue?: TDefaultValue
): TValue => {
  const travel = (regexp: RegExp): TObject =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce<TObject>((res, key) => (res !== null && res !== undefined ? (res[key] as TObject) : res), obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return (result === undefined || result === obj ? defaultValue : result) as TValue;
};
