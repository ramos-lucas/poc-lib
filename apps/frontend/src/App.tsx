import { Button } from "@poc-lib/components";
import "@poc-lib/tokens/dist/variables.css"
import "@poc-lib/components/dist/index.css"

function App() {
  return (
    <>
      <h1 style={{color: "var(--color-base-red)"}}>Hello World</h1>
      <Button>Click me</Button>
    </>
  );
}

export default App;
