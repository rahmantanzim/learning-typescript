# Learning TypeScript

This repository contains my code and notes from the **TypeScript Beginner Crash Course** by **PedroTech**. It serves as a practical guide to mastering the fundamentals of type safety in modern web development.

## 🚀 Getting Started

To compile and run the TypeScript files in this repository:

1. **Install TypeScript globally:**
   ```bash
   npm install -g typescript

2. **IInitialize Configuration:**
   ```bash
   tsc --init

## 📚 Key Concepts Covered

### **Basics & Configuration**
* **Type Annotations**: Defining types for variables like `string`, `number`, and `boolean`.
* **tsconfig.json**: Setting up the compiler rules and enabling `strict` mode.
* **Arrays & Any**: Working with typed arrays and understanding when to use `any`.

### **Objects & Interfaces**
* **Interfaces**: Creating blueprints for objects.
* **Optional Properties**: Using the `?` syntax for fields that aren't always required.
* **Function Types**: Defining types for arguments and return values (including `void`).

### **Advanced Types**
* **Unions (|)**: Allowing a variable to hold more than one type.
* **Intersections (&)**: Combining multiple interfaces into a single type.
* **Type Aliases**: Creating custom, reusable names for complex types.

### **Features for Better Code**
* **Enums**: Defining sets of named constants (e.g., Error Codes or Statuses).
* **Generics (<T>)**: Building reusable classes and functions that work with multiple data types.
* **Read-Only Variables**: Using the `readonly` modifier to prevent data mutation.

---

## 🛠️ Project Structure
* `tutorial.ts` — Main file containing all exercises and examples.
* `tsconfig.json` — Configuration for the TypeScript compiler.
* `README.md` — Project documentation.

---

## 🔗 Resources
* [TypeScript Official Documentation](https://www.typescriptlang.org/)
* [Original Tutorial Video (PedroTech)](https://www.youtube.com/watch?v=3mDny9XAgic)
