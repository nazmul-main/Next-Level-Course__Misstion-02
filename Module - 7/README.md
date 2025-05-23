# 7-1 What is Nodejs , a high level overview of node.js
## Node.js Overview

Node.js is a powerful open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. Here's a high-level overview of Node.js:

## Key Features

- **Server-Side JavaScript**: Allows developers to use JavaScript for both frontend and backend development
- **Event-Driven & Non-Blocking**: Uses an event-driven, asynchronous I/O model that makes it lightweight and efficient
- **NPM (Node Package Manager)**: Huge ecosystem of open-source libraries and tools
- **Single-Threaded Event Loop**: Handles multiple concurrent connections efficiently

## Common Use Cases

1. Web Servers and APIs
2. Real-time Applications
3. Command Line Tools
4. Microservices
5. Backend Services

## Advantages

- Fast execution and high performance
- Large and active community
- Rich ecosystem of packages
- Easy learning curve for JavaScript developers
- Excellent for scalable network applications
# 7-2 What is module, commonjs vs esm
## Modules in Node.js

Node.js uses a modular system to organize and reuse code. There are two main module formats:

### CommonJS vs ESM

#### CommonJS (Traditional Node.js)
- Uses `require()` and `module.exports`
- Synchronous module loading
- Default in Node.js
- Example:
#7-3 File System Module: Synchronous vs Asynchronous**

- Added explanatory notes highlighting the key differences between synchronous and asynchronous methods in Node.js `fs` module.
- Covered practical examples to demonstrate how blocking (sync) and non-blocking (async) operations behave.
- Included use cases and performance considerations to help choose the appropriate method based on project requirements.
- Syntax:
  ```javascript
  const fs = require('fs');

  // Asynchronous file reading
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log(data);
  });

  console.log('This line is printed before file reading completes');
  ```

  ```javascript
  // Synchronous file reading
  const fs = require('fs');

  try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }

  console.log('This line is printed after file reading completes');



# 7-4 Event Driven Architecture

Node.js uses an event-driven architecture where certain types of objects (called "emitters") can emit named events that cause listeners to be called.

## Event Emitter

The EventEmitter class is at the core of Node.js event-driven architecture. Here's how it works:

### Basic Example

```javascript
// Import the events module
const EventEmitter = require("events");

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Register event listeners for 'birthday' event
myEmitter.on("birthday", () => {
  console.log("Happy Birthday To You");
});

// Event listeners can receive parameters
myEmitter.on("birthday", (gift) => {
  console.log(`I will send a gift that is: ${gift}`);
});

// Emit the 'birthday' event with a parameter
myEmitter.emit("birthday", "Watch");

# 7-5 Stream and Buffer, Create Your Own Server

## Streams and Buffers

Streams and buffers are fundamental concepts in Node.js for handling data:

### Buffers
- Raw binary data storage
- Fixed-size chunks of memory
- Used when working with binary data

### Streams
- Handle reading/writing data sequentially
- Process data piece by piece
- Memory efficient for large data

## Example: Creating a Simple Server


