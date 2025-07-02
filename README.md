# Todo App with Next.js, MongoDB & Server Actions

This is a full-stack Todo App built using **Next.js (App Router)**, **MongoDB**, and **Tailwind CSS**. It demonstrates modern full-stack practices with Server Actions using `useAction`, enabling direct data mutations without the need for a separate API layer.

The app allows users to create, update, delete, and toggle tasks, with all data persisted in a MongoDB database.

It showcases how to combine Next.js Server Actions with the MongoDB Client for efficient, scalable backend operations.

---

## ✨ Key Features

- ✅ **Add Task** – Instantly add tasks with Server Actions.  
- 🗑️ **Delete Task** – Remove tasks permanently from MongoDB.  
- ✏️ **Edit Task** – Inline editing of task descriptions.  
- ✔️ **Toggle Complete** – Mark tasks as done or undone.  
- 🔄 **Real-time Updates** – Uses `revalidateTag()` for automatic UI refresh after any change.  
- 🗃️ **Persistent Storage** – Fully connected to MongoDB using the native MongoDB Node.js client.  

---

## 🏗️ Technologies Used

- **Next.js (App Router)** – With Server Actions (`useAction`) for server-side data handling.  
- **MongoDB** – Via the official MongoDB Node.js client.  
- **Tailwind CSS** – For a clean, responsive UI.  
- **TypeScript** – Provides type safety and better developer experience.  

---

## 🔧 Backend Logic

### 🗂️ MongoDB Integration
- Database connection is managed with a shared `getDb()` helper from `connect.ts`.  
- Operations use MongoDB’s `ObjectId` for precise document handling.  

### 🚀 Server Actions with `useAction`
- All CRUD operations (Add, Delete, Toggle, Update) are handled using Server Actions.  
- This eliminates the need for REST or API routes — backend logic runs directly on the server from the component, improving performance and simplicity.  

### ♻️ Cache Management
- Uses Next.js caching with `revalidateTag("todos")` to automatically refresh data after any operation.  

---

## 🔥 Main Functions Breakdown

| Function        | Description                                  |
|-----------------|----------------------------------------------|
| `getTodos()`    | Fetches all tasks from MongoDB.              |
| `addTodo(task)` | Adds a new todo item with `checked: false`. |
| `deleteTodo(id)`| Deletes a task based on its `_id`.           |
| `toggleTodo(id)`| Toggles a task's completion status (`checked`). |


---

## 🖥️ UI Design

- Styled with Tailwind CSS.  
- Minimalistic and responsive.  
- Includes:  
  - An input field with an **Add Task** button.  
  - Each task has:  
    - ✔️ Toggle complete  
    - ✏️ Edit task  
    - 🗑️ Delete task  
- Completed tasks are styled with:  
  - ✅ Strikethrough text  
  - 🔲 Grey background  

---

## 🚀 Learning Outcomes

This project demonstrates:

- How to implement Next.js Server Actions (`useAction`) for backend tasks like add, update, delete, and toggle.  
- Practical MongoDB integration using the MongoDB Node.js client with Next.js.  
- Cache invalidation using `revalidateTag()` for automatic UI updates.  
- Clean, responsive frontend using Tailwind CSS.  
