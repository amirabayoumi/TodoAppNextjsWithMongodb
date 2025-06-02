//get data from the database
import { revalidateTag } from "next/cache";
import { getDb } from "./connect";
import { ObjectId } from "mongodb";
import type { Todo} from "./types";

export async function getTodos(): Promise<Todo[]> {
  try {
    const db = await getDb();
    const collection = db.collection("todolist");
    const todos = await collection.find({}).toArray();
    return todos.map((todo) => ({
      id: todo._id.toString(),
      task: todo.task,
      checked: todo.checked,
    }));
  } catch (error) {
    console.error("Error fetching todolist:", error);
    throw error;
  }
}

export async function addTodo(task: string): Promise<void> {
  try {
    const db = await getDb();
    const collection = db.collection("todolist");
    await collection.insertOne({ task, checked: false });
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
}

export async function deleteTodo(id: string): Promise<void> {
  try {
    const db = await getDb();
    const collection = db.collection("todolist");
    await collection.deleteOne({ _id: new ObjectId(id) });
    revalidateTag("todos");
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
}

export async function toggleTodo(id: string): Promise<void> {
  try {
    const db = await getDb();
    const collection = db.collection("todolist");
    const todo = await collection.findOne({ _id: new ObjectId(id) });
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { checked: !todo.checked } }
    );
    revalidateTag("todos");
  } catch (error) {
    console.error("Error toggling todo:", error);
    throw error;
  }
}


export async function updateTodo(id: string, task: string): Promise<void> {
  try {
    const db = await getDb();
    const collection = db.collection("todolist");
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { task } }
    );
    revalidateTag("todos");
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
}