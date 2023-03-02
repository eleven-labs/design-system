import * as React from 'react';
import { BoxProps } from '../../../components';
import { AsProps } from '../../../types';
export type SearchFieldOptions = {
    input: React.ComponentPropsWithRef<'input'>;
    buttonSearch: AsProps<'button'>;
    buttonClose?: AsProps<'button'>;
};
export type SearchFieldProps = BoxProps & SearchFieldOptions;
export declare const SearchField: import('../../../types').ComponentWithAs<"div", SearchFieldProps>;
