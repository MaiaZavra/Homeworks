import React from "react";
import Child from "./Child";

function Parent() {
  const users = [
    { id: 1, name: "Maria", lastName: "Calas", age: 45 },
    { id: 2, name: "Thomas", lastName: "Man", age: 50 },
    { id: 3, name: "Ain", lastName: "Rend", age: 20 },
  ];

  return (
    <div>
      <Child users={users} isUserLoggedIn={true} />
    </div>
  );
}

export default Parent;
