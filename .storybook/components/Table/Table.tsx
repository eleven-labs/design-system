import React from 'react';
import './Table.scss';
import { Box, BoxProps, Heading } from '@/components';

export interface TableProps<TRow = any> extends BoxProps {
    title: string;
    columns: {
        name: string;
        label: string;
    }[];
    rows: TRow[];
}

export const Table: React.FC<TableProps> = ({ title, columns, rows, ...boxProps }) => (
    <Box {...boxProps}>
        <Heading as="p" mb="xxs">{title}</Heading>
        <div
            className="storybook-table"
            style={{
                '--storybook-table-grid-cols': columns.length
            } as React.CSSProperties}
        >
            <Box py="xs" bg="ultra-light-grey" color="grey" className="storybook-table__head">
                {columns.map(column => (
                    <Box key={column.name} px="xxs">
                        {column.label}
                    </Box>
                ))}
            </Box>
            {rows.map((row, index) => (
                <Box key={index} py="s" className="storybook-table__row">
                    {columns.map(column => (
                        <Box key={column.name} px="xxs">
                            {row[column.name] || '-'}
                        </Box>
                    ))}
                </Box>
            ))}
        </div>
    </Box>
);
