import { ObjectId } from "mongodb";



export interface TodoMogodb {
  _id: ObjectId;
  task: string;
  checked: boolean;
}

export interface Todo {
  id: string;
  task: string;
  checked: boolean;
}

export type Message = {
  type: string;
  message: string;
};