import { kebabCase } from '../stringHelper';
import { classNamesWithMediaQueries } from './classNamesWithMediaQueries';

export const systemClassNames = <TProps>(options: {
  props: TProps;
  systemPropNames: string[];
  hasResponsiveProps?: boolean;
  valueIsResponsiveProps?: boolean;
}): string[] =>
  options.systemPropNames.reduce<string[]>((classNames, propName) => {
    const propValue = options.props[propName as keyof TProps];
    if (!propValue) {
      return classNames;
    }

    if (typeof propValue === 'string' && propValue && !options.hasResponsiveProps) {
      classNames.push(`${kebabCase(propName)}${options.valueIsResponsiveProps ? '@' : '-'}${kebabCase(propValue)}`);
      return classNames;
    }

    return [
      ...classNames,
      ...classNamesWithMediaQueries({
        className: kebabCase(propName),
        propValue,
        withSuffixPropValue: true,
      }),
    ];
  }, []);
