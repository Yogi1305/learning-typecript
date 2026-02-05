# TypeScript Installation and Setup Guide

## Installation

1. **Install Node.js** (if not already installed)
    - Download from [nodejs.org](https://nodejs.org)

2. **Initialize your project**
    ```bash
    npm init -y
    ```

3. **Install TypeScript**
    ```bash
    npm install --save-dev typescript
    or
    npm i -D typescript
    ```



4. **Initialize TypeScript configuration**
    ```bash
    npx tsc --init
    ```
5. **uncomment the ouptut path in tsconfig.json**

## Running TypeScript

1. **Create a TypeScript file**
    ```bash
    touch index.ts
    ```

2. **Add code to your file**
    ```typescript
    const greeting: string = "Hello, TypeScript!";
    console.log(greeting);
    ```

3. **Compile TypeScript to JavaScript**
    ```bash
    npx tsc
    ```

4. **Run the compiled JavaScript**
    ```bash
    node dist/index.js
    ```

## Development Workflow (Optional)

Use watch mode for automatic compilation:
```bash
npx tsc --watch
```
