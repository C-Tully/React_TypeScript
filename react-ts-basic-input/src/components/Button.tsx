import { type ComponentPropsWithoutRef } from "react";

/**
 * type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;
 */

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?:string;
};

/** type predicate
*special type of return type, that tells TS the bool return val
* dicticates that a returned tru = to a given type and allows the 
* TSC to continue on. The Downside of this is that it allows for props
* to be passed through eg passing target on a <button> now TSC ignores this warning
* By merging the default button props type with another custom obect type
* we set the href to never this helps to inform tscs and helps prevent the non
* applicable attributes (disabed, target etc)
* 
*/
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  // const { el, ...otherProps } = props;

  /**
   * if (props.el === "anchor") {
    return <a className="button" {...props}></a>;
  }
*/

  //alternative way to typing a component
  // if ("href" in props) {
  if(isAnchorProps(props)) 
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
