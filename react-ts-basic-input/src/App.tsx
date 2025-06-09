//Form examples
import { useRef } from "react";
import Input from "./components/Input.tsx";
import Form, { type FormHandle } from "./components/Form.tsx";
import Button from "./components/Button.tsx";

//Re Forwaring Refs, we set the type here to make more clear
//that it will connect to one of the same type, downstream.

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    //since we have the input elements at this level.
    // we can now pass that data type to the forms onsave function
    // we use the TS 'as'
    const expectedData = data as {
      name: string;
      age: string; //values entered into input fields are type string once extracted
    };
    customForm.current?.clear();

    //exposting an api from a component.
    // form.current.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

// //Ref example
// // import { forwardRef } from "react";
// import { useRef } from "react";
// import Input from "./components/Input.tsx";

// //Re Forwaring Refs, we set the type here to make more clear
// //that it will connect to one of the same type, downstream.
// const input = useRef<HTMLInputElement>(null);

// function App() {
//   return (
//     <main>
//       <p>
//         <Input label="Test" id="test" ref={input} />
//       </p>
//     </main>
//   );
// }

// //PolyMorphic component
// import Button from "./components/Button.tsx";
// import Container from "./components/Container.tsx";

// import

// function App() {
//   return (
//     <main>
//       <Container
//         as={Button}
//         onClick={() => {
//           console.log("click!");
//         }}
//       >
//         Click me
//       </Container>
//     </main>
//   );
// }

// export default App;

/**
 * function App() {
  return (
    <main>
      <p>
        {/* //Note: href doesn't work due to the el }
*        {/* <Button el="button"> A Button</Button> }
 *       <Button>A Button</Button>
      </p>
      <p>
        {/* <Button el="anchor" href="https://google.com"> }
        <Button href="https://google.com">A Link</Button>
      </p>
      {/* <Input
        id="name"
        label="Your name"
        type="text"
        disabled
        aria-label="abc"
      />
      <Input id="age" label="Your age" type="number" /> }
    </main>
  );
}
 * 
 */
