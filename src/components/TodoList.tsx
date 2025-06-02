export const dynamic = "force-dynamic";
import TodoListItem from "./TodoListItem";
// import type { Todo } from "@/types";

const TodoList = async () => {
 
  // const res = await fetch(`http://localhost:3000/api/todos`, {
  //   cache: "no-store",
  // });
  // const todos: Todo[] = await res.json();
  const todos =[
    {
      id: "1",
      task: "Sample Todo",
      checked: false,
    },
    {
      id: "2",
      task: "Another Todo",
      checked: true,
    },
  ]
  if (!todos || todos.length === 0) {
    return <div>No todos found</div>;
  }
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default TodoList;
