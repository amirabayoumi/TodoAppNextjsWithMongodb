"use client";
import { Button } from "./ui/button";
import { Trash2, LoaderPinwheel } from "lucide-react";

import { useFormStatus } from "react-dom";

const TodoRemoveButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 text-muted-foreground hover:text-destructive cursor-pointer"
      disabled={pending}
    >
      {pending ? (
        <LoaderPinwheel className="h-4 w-4 animate-spin " />
      ) : (
        <Trash2 className="h-4 w-4" />
      )}
    </Button>
  );
};
export default TodoRemoveButton;
