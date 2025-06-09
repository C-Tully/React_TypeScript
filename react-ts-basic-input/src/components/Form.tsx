//Exposing the components API
import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useImperativeHandle,
  useRef,  
  forwardRef
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export type FormHandle = {  
  clear:  () => void
}

const Form = forwardRef<FormHandle, FormProps>( function Form({ 
  onSave,
   children,
  ...otherProps,
},
  ref
){
  const form = useRef<HTMLFormElement>(null);

  //exposes components api  
  //the passed methods are what get exposed
  useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current?.reset();
      }
    }
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    onSave(data);
    //using the ref, we reset the forms value
    form.current?.reset();

    //
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
}
}

export default Form;
//Form example
// //Accept all the props
// import { FormEvent, type ComponentPropsWithoutRef } from "react";

// type FormProps = ComponentPropsWithoutRef<"form"> & {
//   //We use theu unknown type here due to the unknown of the
//   //possible props.children.
//   onSave: (value: unknown) => void;
// };

// export default function Form({ onSave, children, ...otherProps }: FormProps) {
//   function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     //getting the submitted data.
//     //Using the default FormData from js
//     // and get all form data and create a object
//     // all data submitted must include a name.
//     const formData = new FormData(e.currentTarget);
//     //convert FormData object, to a simpler object
//     const data = Object.fromEntries(formData);
//   }

//   return (
//     <form onSubmit={handleSubmit} {...otherProps}>
//       {children}
//     </form>
//   );
// }
