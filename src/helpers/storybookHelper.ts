import { ControlType } from '@storybook/components';
import { ArgTypes, InputType } from '@storybook/csf';

import { kebabCase } from './stringHelper';

const MDN_URL = 'https://developer.mozilla.org/en-US/docs/Web/CSS/';

export const createDescription = (options: { cssProperties: string[]; cssValues?: string[] }): string => {
  const description: string[] = [];
  const cssProps = options.cssProperties
    .map(kebabCase)
    .map((cssProp) => ` [${cssProp}](${MDN_URL}${cssProp})`)
    .join(', ');

  let cssPropertiesDescription = `**CSS Properties**: ${cssProps}`;
  if (options.cssValues) {
    cssPropertiesDescription += ` \`(${options.cssValues.join(' | ')})\``;
  }

  description.push(cssPropertiesDescription);

  return description.join('<br />');
};

export const createControls = (options: {
  category: string;
  props: { [propName: string]: string[] };
  subCategory?: string;
  controlType?: ControlType | Record<string, ControlType>;
  options?: Record<string, readonly string[]> | readonly string[];
}): Partial<ArgTypes> => {
  return Object.entries(options.props).reduce<Record<string, InputType>>((controls, [propName, cssProperties]) => {
    controls[propName] = {
      description: createDescription({
        cssProperties,
      }),
      table: {
        category: options.category,
      },
    };

    if (options.subCategory) {
      controls[propName].table.subcategory = options.subCategory;
    }

    if (options.controlType) {
      if (typeof options.controlType === 'object') {
        controls[propName].control = options.controlType?.[propName];
      } else {
        controls[propName].control = options.controlType;
      }
    }

    if (options.options) {
      if (Array.isArray(options.options)) {
        controls[propName].options = options.options;
      } else if ((options.options as Record<string, readonly string[]>)?.[propName]) {
        controls[propName].options = (options.options as Record<string, readonly string[]>)[propName];
      }

      if (!controls[propName]?.control) {
        controls[propName].control = 'select';
      }
    }

    return controls;
  }, {});
};
