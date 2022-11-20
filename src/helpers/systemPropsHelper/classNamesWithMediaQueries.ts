import { mediaQueriesList } from '@/constants';
import { kebabCase } from '@/helpers/stringHelper';
import type { TypeWithMediaQueriesType } from '@/types';

export const classNamesWithMediaQueries = <TPropValue extends string | number | boolean>(options: {
  className: string;
  propValue?: TPropValue | TypeWithMediaQueriesType<TPropValue>;
  withSuffixPropValue?: boolean;
}): string[] => {
  if (options.propValue && ['string', 'number'].includes(typeof options.propValue) && options.withSuffixPropValue) {
    return [
      `${options.className}-${kebabCase(
        typeof options.propValue === 'number' ? options.propValue.toString() : (options.propValue as string)
      )}@xs`,
    ];
  } else if (options.propValue !== undefined && typeof options.propValue !== 'object') {
    return [`${options.className}@xs`];
  }

  const classNames = [];
  const classNamesByMediaQuery = mediaQueriesList.reduce<string[]>((currentClassNames, modifierName) => {
    const propValueModifier = (options.propValue as TypeWithMediaQueriesType<TPropValue>)?.[modifierName];
    if (propValueModifier && ['string', 'number'].includes(typeof propValueModifier) && options.withSuffixPropValue) {
      currentClassNames.push(
        `${options.className}-${kebabCase(
          typeof propValueModifier === 'number' ? propValueModifier.toString() : (propValueModifier as string)
        )}@${modifierName}`
      );
    } else if (propValueModifier !== undefined) {
      currentClassNames.push(`${options.className}@${modifierName}`);
    }
    return currentClassNames;
  }, []);
  classNames.push(...classNamesByMediaQuery);

  return classNames;
};
