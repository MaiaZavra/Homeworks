import React from "react";

function Child({ users, isUserLoggedIn }) {
  return (
    <div>
      {isUserLoggedIn ? (
        <div>
          {users.length ? (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.name} {user.lastName}, age {user.age}
                </li>
              ))}
            </ul>
          ) : (
            <p>No users in the system</p>
          )}
        </div>
      ) : (
        <p>You are not authorized to see user list</p>
      )}
    </div>
  );
}

export default Child;
