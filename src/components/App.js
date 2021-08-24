import React from "react";
import { format } from "date-fns";
import ExampleComponent, {greeting} from "./ExampleComponent";

// Add your code own within the return statement
function App() {
  console.log(greeting)
  return (
    <div className="App">
      <h1>{'Now'}</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <img src='logo192.png'/>
      {ExampleComponent()}

    </div>
  );
}

export default App;
