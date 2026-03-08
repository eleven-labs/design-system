import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface TableProps<TRow = any> extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  columns: {
    name: string;
    label: string;
  }[];
  rows: TRow[];
}

export const Table: React.FC<TableProps> = ({ title, columns, rows, className, ...props }) => (
  <div {...props} className={className}>
    <p className="mb-xxs typography-heading-l">{title}</p>
    <div>
      <div
        className="bg-secondary py-xs text-primary-light"
        style={{ display: 'grid', gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
      >
        {columns.map((column) => (
          <div key={column.name} className="px-xxs">
            {column.label}
          </div>
        ))}
      </div>
      {rows.map((row, index) => (
        <div
          key={index}
          className="py-s"
          style={{ display: 'grid', gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
        >
          {columns.map((column) => (
            <div key={column.name} className="px-xxs">
              {row[column.name] || '-'}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);
