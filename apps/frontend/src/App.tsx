import { Button, ThemeProvider } from "@poc-lib/components";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <ThemeProvider>
        <div className="container">
          <Button>Primary</Button>
          <Button disabled>Primary disabled</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='secondary' size='medium'>Click me</Button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
