import React from 'react';
import NextLink from 'next/link';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  scroll?: boolean;
}

export default function Link({
  href,
  children,
  className = '',
  scroll = true,
  ...props
}: LinkProps) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    return <a href={href} className={className} {...props}>{children}</a>;
  }

  return <NextLink href={href} scroll={scroll} className={className} {...props}>{children}</NextLink>;
}
