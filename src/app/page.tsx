import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Todo App
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <TodoForm />
          <TodoList />
        </CardContent>
      </Card>
    </div>
  );
}

//files needed for the app to work:
// connect to the database
//server-action ( create, update, delete and validation for input )
// queries to get data from the database
// api routes to handle CRUD operations in my app( for just GET request, we can use server-action for the rest )
