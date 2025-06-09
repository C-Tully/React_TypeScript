import {
  forwardRef,
  // type ComponentPropsWithRef,
  // type ComponentPropsWithoutRef,
} from "react";

type InputProps = {
  label: string;
  id: string;
};
// } & ComponentPropsWithRef<"input">;
// ComponentPropsWithoutRef<'literaltypeforspecifiElement'>

/**
 * Note: When forwarding a ref, we need ot make sure
 * we are typing the forwardRef function with the
 * expecting the type the ref will manage
 * the second is the type of props it will receive
 *
 */

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} ref={ref} />
    </p>
  );
});
export default Input;

// export default function Input({ label, id, ...props }: InputProps) {
//   return (
//     <p>
//       <label htmlFor={id}>{label}</label>
//       <input id={id} {...props} ref={ref} />
//     </p>
//   );
// }
