import React from 'react';

export interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, description, children }) => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html:
          '.sbdocs-wrapper {padding: 0;} .sbdocs-content {max-width: inherit;}',
      }}
    />
    <main>
      {title && (
        <div className="bg-primary px-l py-xxl text-white">
          <p className="typography-heading-xl">{title}</p>
          {description && <p className="mt-xxs typography-text-m" dangerouslySetInnerHTML={{ __html: description }} />}
        </div>
      )}
      <div className="mt-s px-l">
        {children}
      </div>
    </main>
  </>
);
