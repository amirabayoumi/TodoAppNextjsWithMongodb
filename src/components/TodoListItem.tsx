import { deleteTodoAction, toggleTodoAction } from "@/actions";
import type { Todo } from "@/types";
import TodoRemoveButton from "./TodoRemoveButton";
import CheckButton from "./CheckButton";

const TodoListItem = ({ todo }: { todo: Todo }) => {
  if (!todo) {
    return <div className="text-red-500">Todo not found</div>;
  }
  return (
    <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
      <form action={toggleTodoAction}>
        <input type="hidden" name="id" value={todo.id} />
        <CheckButton todo={todo} />
      </form>

      <span className="flex-1 text-sm font-medium">{todo.task}</span>
      <form action={deleteTodoAction}>
        <input type="hidden" name="id" value={todo.id} />
        <TodoRemoveButton />
      </form>
    </div>
  );
};
export default TodoListItem;
