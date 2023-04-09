import React from 'react';
import { BoxProps } from '../../../components';
export declare const reminderVariantList: readonly ["note", "summary", "info", "tip", "success", "question", "warning", "failure", "danger", "bug", "example", "quote"];
export type ReminderVariantType = (typeof reminderVariantList)[number];
export type ReminderOptions = {
    variant: ReminderVariantType;
    title: React.ReactNode;
};
export type ReminderProps = BoxProps & ReminderOptions;
export declare const Reminder: React.FC<ReminderProps>;
