declare module "*.png" {
  const imgSrc: string;
  export default imgSrc;
}
declare module "*.jpg" {
  const imgSrc: string;
  export default imgSrc;
}
declare module "*.jpeg" {
  const imgSrc: string;
  export default imgSrc;
}

declare module "*.module.css" {
  const classNames: Readonly<Record<string, string>>;
  export default classNames;
}

declare module "*.less" {
  const classNames: Record<string, string>;
  export default classNames;
}

declare module "*.svg" {
  import type * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;

  export default ReactComponent;
}
