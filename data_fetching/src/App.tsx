import { get } from "./utils/http";

function App() {
  const TEST_URL = "https://jsonplaceholder.typicode.com/posts/1";
  get(TEST_URL);
  return <h1>Data Fetching!</h1>;
}

export default App;
