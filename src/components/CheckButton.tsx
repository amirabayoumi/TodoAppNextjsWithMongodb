"use client";
import { Button } from "./ui/button";
import { Check, Circle, LoaderPinwheel } from "lucide-react";
import type { Todo } from "@/types";
import { useFormStatus } from "react-dom";

const CheckButton = ({ todo }: { todo: Todo }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 text-muted-foreground hover:text-primary"
    >
      {pending ? (
        <LoaderPinwheel className="h-4 w-4 animate-spin " />
      ) : todo.checked ? (
        <Check className="h-4 w-4" />
      ) : (
        <Circle className="h-4 w-4" />
      )}
    </Button>
  );
};
export default CheckButton;
