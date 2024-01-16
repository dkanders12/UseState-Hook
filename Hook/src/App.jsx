import { useState } from "react";
import { GreetingComponent } from "./components/Hook/Hook";
import { TodoList } from "./components/Todo/Todo";

import "./App.scss";

function App() {
  return (
    <>
      <GreetingComponent></GreetingComponent>
      <TodoList></TodoList>
    </>
  );
}

export default App;
