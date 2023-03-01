import * as React from 'react';
import { BoxProps } from '../../../components';
import { AsProps } from '../../../types';
export type SearchFieldOptions = {
    input: React.ComponentPropsWithRef<'input'>;
    buttonSearch: Omit<AsProps<'svg'>, 'name'>;
    buttonClose?: Omit<AsProps<'svg'>, 'name'>;
};
export type SearchFieldProps = BoxProps & SearchFieldOptions;
export declare const SearchField: import('../../../types').ComponentWithAs<"div", SearchFieldProps>;
