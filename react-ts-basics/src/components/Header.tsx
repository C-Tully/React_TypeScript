/**
 * Note: Refactoring to align with course. My initial way worked
 * so I'm leaving it here.
 */
/**  import { type PropsWithChildren } from "react";
 * type HeaderProps = PropsWithChildren<{
 *   imageProps: { imgSrc: string; altText: string };
 * }>;
 * export default function Header({ imageProps, children }: HeaderProps) {
 *   return (
 *     <header>
 *       <img src={imageProps.imgSrc} alt={imageProps.altText} />
 *       {children}
 *     </header>
 *   );
 * }
 */

import { type ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
