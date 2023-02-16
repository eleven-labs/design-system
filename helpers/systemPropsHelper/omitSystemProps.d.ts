export declare const omitSystemProps: <TProps extends Record<string, unknown>>(options: {
    props: TProps;
    systemPropNames: string[];
}) => Record<string, unknown>;
