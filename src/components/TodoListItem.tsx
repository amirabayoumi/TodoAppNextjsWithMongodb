"use client";
import {
  deleteTodoAction,
  toggleTodoAction,
  updateTodoAction,
} from "@/actions";
import type { Todo } from "@/types";
import TodoRemoveButton from "./TodoRemoveButton";
import CheckButton from "./CheckButton";
import { useActionState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit2Icon, LoaderPinwheel } from "lucide-react";
const TodoListItem = ({ todo }: { todo: Todo }) => {
  const initialState = { type: "", message: "" };
  const [message, action, isPending] = useActionState(
    updateTodoAction,
    initialState
  );

  if (!todo) {
    return <div className="text-red-500">Todo not found</div>;
  }
  return (
    <div
      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors "
      {...(todo.checked
        ? {
            style: {
              textDecoration: "line-through",
              backgroundColor: "#f0f0f0",
              color: "#a0a0a0",
            },
          }
        : {})}
    >
      <form action={toggleTodoAction}>
        <input type="hidden" name="id" value={todo.id} />
        <CheckButton todo={todo} />
      </form>

      <span className="flex-1 text-sm font-medium">{todo.task}</span>
      <form action={deleteTodoAction}>
        <input type="hidden" name="id" value={todo.id} />
        <TodoRemoveButton />
      </form>

      <Dialog>
        <DialogTrigger>
          {" "}
          <Edit2Icon />
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Edit Todo</DialogTitle>

          <div>
            <form action={action}>
              <input type="hidden" name="id" value={todo.id} />
              <input
                type="text"
                name="task"
                defaultValue={todo.task}
                className="w-full p-2 border rounded-md"
              />

              <Button type="submit" disabled={isPending} className="mt-2">
                {isPending ? (
                  <LoaderPinwheel className="h-4 w-4 animate-spin " />
                ) : (
                  "Update Todo"
                )}
              </Button>

              <p>{message.message}</p>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default TodoListItem;
