
import { Todo } from "./projects/ToggleSwitch/Todo/Todo";
import "./components/Netflix.module.css";

import './index.css';
// for named export , we need to wrap it inside {}, like {Card}
// if we would have exported Card, like - export default Card, then we don't need to add it in curly braces

export const App=()=>{
  return (
    <section className = "container">
      <Todo/>
    </section>
    );
};


//Bun is a replacement for Node.js

/*Bun is a JavaScript runtime that can be used with React to bundle, transpile, install, and run 
JavaScript and TypeScript projects. Bun is designed to be a drop-in replacement for Node.js. */