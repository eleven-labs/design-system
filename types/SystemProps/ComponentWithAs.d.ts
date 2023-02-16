export type As<Props = any> = React.ElementType<Props>;
/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
    as?: As;
};
export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<Target, 'as' | 'color' | OmitAdditionalProps>;
export type RightJoinProps<SourceProps extends object = {}, OverrideProps extends object = {}> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;
export type MergeWithAs<ComponentProps extends object, AsProps extends object, AdditionalProps extends object = {}, AsComponent extends As = As> = RightJoinProps<ComponentProps, AdditionalProps> & RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
};
export type ComponentWithAs<Component extends As, Props extends object = {}> = {
    <AsComponent extends As = Component>(props: MergeWithAs<React.ComponentProps<Component>, React.ComponentProps<AsComponent>, Props, AsComponent>): JSX.Element;
    displayName?: string;
};
