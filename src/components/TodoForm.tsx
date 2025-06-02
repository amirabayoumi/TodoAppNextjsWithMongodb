"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { LoaderPinwheel } from "lucide-react";
import { addTodoAction } from "@/actions";
const TodoForm = () => {
  const initialState = { type: "", message: "" };
  const [message, action, isPending] = useActionState(
    addTodoAction,
    initialState
  );

  return (
    <form className="flex gap-2" action={action}>
      <Input
        type="text"
        name="task"
        placeholder="Add a new task"
        className="flex-1"
      />
      <Button disabled={isPending} type="submit">
        {isPending ? (
          <LoaderPinwheel className="h-4 w-4 animate-spin " />
        ) : (
          "Add Task"
        )}
      </Button>
      {message.type && (
        <div
          className={`text-sm ${
            message.type === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {message.message}
        </div>
      )}
    </form>
  );
};
export default TodoForm;
