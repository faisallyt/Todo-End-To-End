export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo, index) {
        return (
          <div key={index}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>

            <button
              onClick={() => {
                if (todo.completed == false) {
                  fetch("http:localhost:3000/completed", {
                    method: "PUT",
                    body: JSON.stringify({
                      id: todo._id,
                    }),
                    headers: {
                      "Content-type": "application/json",
                    },
                  });
                }
              }}>
              {todo.completed == true ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
