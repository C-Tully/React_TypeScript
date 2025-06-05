import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

//PolyMorphic example
//setting the type to have a generic type ala placeholder
//'extends' Adding a condition to the generic type to limit the passed types
type ContainerProps<T extends ElementType> = {
  //The as will be used as the identifier for the return type
  // as: ElementType;
  as?: T;
  children: ReactNode;
  //accepting all props from the given component
  // passed via the "as" remember the ComponentPropsWithRef needs to be
  // given a value in the <>
} & ComponentPropsWithoutRef<T>;

//export default function Container<C extends ElementType>({ as: Component, children }: ContainerProps<C>) {
//by setting the export function from a non generic function into a function that si generic
// allows us to set the polymorphic state required the extends to match the polymorphic extends
//Passing the props to the final component via the destructuring
export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  //remapping to constant or aliased as destructured
  // const Component = as;
  // return <Component />;
  const Component = as || "div";
  return (
    <main>
      <Component className="container" {...props}>
        {children}
      </Component>
    </main>
  );
}
