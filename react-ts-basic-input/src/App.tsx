// import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";

function App() {
  return (
    <main>
      <p>
        {/* //Note: href doesn't work due to the el */}
        <Button el="button"> A Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://google.com">
          A Link
        </Button>
      </p>
      {/* <Input
        id="name"
        label="Your name"
        type="text"
        disabled
        aria-label="abc"
      />
      <Input id="age" label="Your age" type="number" /> */}
    </main>
  );
}

export default App;
