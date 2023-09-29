import Link from 'next/link';
import React from 'react';

const CustomLink = ({
  children,
  href,
  target,
  prefetch,
  rel,
  scroll,
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
    <Link
      className="link-text-token underline"
      {...(target && { target })}
      {...(href && { href })}
      {...(prefetch && { prefetch })}
      {...(rel && { rel })}
      {...(scroll && { scroll })}
      {...restProps}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
