Visit: https://super-otter-e270ca.netlify.app/

# 📝 React Todo App

This is a simple and elegant Todo List application built using **React**. The app allows users to manage their daily tasks effectively with a clean UI, interactive features, and persistent storage using **Local Storage**.

## 🌟 Features

- ✅ **Add a Task**  
  Users can input a task in the form field and click **"Add Task"** to append it to the list.

- 🗑️ **Delete a Task**  
  Click the red trash icon to remove a specific task from the list.

- ✔️ **Complete a Task**  
  Tasks can be marked as completed by clicking the green check icon. Completed tasks will be displayed with a strikethrough.

- 🖊️ **Edit a Task**  
  Click the pencil icon to modify an existing task without deleting and re-adding it.

- 🌗 **Toggle Light/Dark Mode**  
  Easily switch between dark and light themes using the toggle button on the top right corner.

- 🧹 **Clear All Tasks**  
  Click the **"Clear All"** button to remove every task from the list at once.

- 💾 **Local Storage Integration**  
  Tasks are saved in the browser's local storage, so they persist even after a page reload.

- 🕒 **Live Date and Time Display**  
  Current date and time are shown dynamically in the header.

## 📸 Preview

<img width="1280" alt="Image" src="https://github.com/user-attachments/assets/44394470-27fb-44a0-aef3-b30640fc88ba" />


# TodoApp

## 🧑‍💻 Tech Stack & Architecture

### ⚙️ Core Technologies

- [**React**](https://reactjs.org/)  
  Used for building the user interface with a component-based structure, enabling efficient state and UI management.

- [**Vite**](https://vitejs.dev/)  
  Lightning-fast frontend build tool that serves as the development environment for fast HMR and bundling.

- [**Bun**](https://bun.sh/) *(Optional)*  
  A modern JavaScript runtime used for running and bundling the project with better performance and speed than traditional Node.js setups.

- **CSS**  
  Handles UI styling, including support for light/dark mode using dynamic class toggling.

---

### 🧱 Project Structure

- **Todo.jsx**  
  Main component that manages global state for the todo list using `useState`, handles all core operations: add, delete, edit, toggle complete, and clear tasks. Also handles theme switching and renders child components.

- **TodoForm.jsx**  
  Contains the input form logic for adding new tasks. Uses controlled input and passes new tasks up to `Todo.jsx`.

- **TodoList.jsx**  
  Represents individual todo items. Displays task text, completion state, and interactive buttons for editing, checking, and deleting.

- **TodoDate.jsx**  
  Displays current date and time using `toLocaleDateString` and `toLocaleTimeString`.

- **TodoLocalStorage.js**  
  Handles persistent state by interacting with `localStorage`. Two utility functions:
  - `getTodoLocalStorageData()`: Retrieves tasks from local storage
  - `setTodoLocalStorageData()`: Saves updated tasks to local storage

---

### 🔄 State Management

- React's `useState()` hook is used for managing:
  - `task`: List of todo items.
  - `isDarkMode`: Boolean for tracking light/dark theme.

- All user interactions (add, delete, toggle, edit) update the state, which triggers re-rendering the UI accordingly.

---

### 🌓 Theme Toggling

- A simple boolean `isDarkMode` toggles between two classes: default (dark) and `light`.
- CSS handles the color transitions and background changes.

---

### 💾 Data Persistence

- Tasks are automatically saved in `localStorage` on every change using `setTodoLocalStorageData()`, ensuring data survives page reloads or browser restarts.

---

### 📦 Build & Run

- Development:
  ```bash
  bun run dev
  # or
  npm run dev

