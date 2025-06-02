export const dynamic = "force-dynamic";
import TodoListItem from "./TodoListItem";
import type { Todo } from "@/types";

const TodoList = async () => {
  const res = await fetch(
    "https://todo-app-nextjs-with-mongodb-ujc5.vercel.app/api/todos",
    {
      next: { tags: ["todos"], revalidate: 60 }, // Revalidate every 60 seconds
    }
  );
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
