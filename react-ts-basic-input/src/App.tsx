// import Input from "./components/Input.tsx";

//PolyMorphic component
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";

function App() {
  return (
    <main>
      <Container
        as={Button}
        onClick={() => {
          console.log("click!");
        }}
      >
        Click me
      </Container>
    </main>
  );
}

export default App;

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
