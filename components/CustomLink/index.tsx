import Link from 'next/link';
import React from 'react';

const CustomLink = ({
  children,
  href,
  restProps,
}: {
  children:
    | React.ReactNode
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactPortal;
  href: string;
  prefetch?: boolean;
  scroll?: boolean;
  target?: string;
  restProps?: any;
  rel?: string;
}): React.ReactNode => {
  return (
    <Link className="link-text-token underline" href={href} {...restProps}>
      {children}
    </Link>
  );
};

export default CustomLink;
