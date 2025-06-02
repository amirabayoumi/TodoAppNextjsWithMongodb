//handle add , delete and toggle actions for todos
'use server';
import {  deleteTodo, toggleTodo, addTodo, updateTodo} from "@/queries";
import type { Message } from "@/types";
import { revalidateTag } from "next/cache";



//this need validation 
export async function addTodoAction(initialState: Message,fd: FormData): Promise<Message> {
    const task = fd.get("task");
   
    
    if (typeof task === "string" && task.trim() === "") {
        return { type: "error", message: "Task cannot be empty!" }; 
    } 


    const dirtyWords = ["badword1", "badword2"]; // Example list of dirty words
    const isDirty = typeof task === "string" && dirtyWords.some(word => task.includes(word));
    if (isDirty) {
        return { type: "error", message: "Task contains inappropriate content!" };
    }

    if (typeof task === "string" && task.trim() !== "") {
        await addTodo(task);
        revalidateTag("todos"); // Revalidate the todos tag to refresh the data
        return { type: "success", message: "Todo added successfully!" };
    } 

    // Fallback return for all other cases
    return { type: "error", message: "Invalid task input!" };
}









//useFormstatus for this functions 
export async function deleteTodoAction(fd: FormData): Promise<void> {
    const id = fd.get("id");
    if (typeof id === "string") {
        await deleteTodo(id);
        revalidateTag("todos"); 
    } else {
        throw new Error("Invalid or missing 'id' in FormData");
    }
}

export async function toggleTodoAction(fd: FormData): Promise<void> {
    const id = fd.get("id");
    if (typeof id === "string") {
        await toggleTodo(id);
        revalidateTag("todos");
    } else {
        throw new Error("Invalid or missing 'id' in FormData");
    }


}


export async function updateTodoAction(initialState: Message,fd: FormData): Promise<Message> {
    const id = fd.get("id");
    const task = fd.get("task");
    if (typeof id === "string" && typeof task === "string") {
        await updateTodo(id, task);
      
        return { type: "success", message: "Todo updated successfully!" }; 
         revalidateTag("todos");
        
    } else {
        throw new Error("Invalid or missing 'id' or 'task' in FormData");
    }
}