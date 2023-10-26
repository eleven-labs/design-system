import React from 'react';
import type { BoxProps } from '../../../components';
export declare const reminderVariantList: readonly ["note", "summary", "info", "tip", "success", "question", "warning", "failure", "danger", "bug", "example", "quote"];
export type ReminderVariantType = (typeof reminderVariantList)[number];
export interface ReminderProps extends BoxProps {
    variant: ReminderVariantType;
    title: React.ReactNode;
}
export declare const Reminder: import("react-polymorphed").PolyForwardComponent<"div", ReminderProps, React.ElementType<any>>;
