import TodoListItem from "./TodoListItem";
import type { Todo } from "@/types";

const TodoList = async () => {
  const baseUrl = process.env.VERCEL_URL || "http://localhost:3000";
  if (!baseUrl) {
    throw new Error("Base URL is not defined");
  }
  const res = await fetch(`${baseUrl}/api/todos`, {
    next: { revalidate: 60, tags: ["todos"] },
  });
  const todos: Todo[] = await res.json();
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
