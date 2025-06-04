import Input from "./components/Input.tsx";

function App() {
  return (
    <main>
      <Input
        id="name"
        label="Your name"
        type="text"
        disabled
        aria-label="abc"
      />
      <Input id="age" label="Your age" type="number" />
    </main>
  );
}

export default App;
