# Express LocalLibrary Tutorial

A tutorial-based web application for managing a local library's catalog using Node.js and Express.js. 📚

---

This project showcases an online catalog system for a small local library. It allows users to browse books and view detailed information. The project is based on the [MDN Local Library tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website), with custom enhancements and learnings incorporated during development.

![UML Diagram - Database Entity Relationships](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/public/images/Library%20Website%20-%20Mongoose_Express.png)

---

## Key Features ✨

- **Book Browsing:** View available books, authors, genres, and detailed information for each item.
- **Dynamic Web Pages:** Developed using Pug templates for server-side rendering.
- **RESTful APIs:** Includes endpoints to interact with the database seamlessly.
- **MongoDB Integration:** Uses Mongoose for object data modeling and MongoDB Atlas for cloud-based database hosting.

---

## What I Learned 🧠

This project was an excellent learning experience for foundational server-side web development. Key takeaways include:

- **Node.js & Express:** Learned to build a robust backend for handling HTTP requests and routing.
- **Template Engines:** Used Pug to dynamically generate HTML based on server-side data.
- **Database Modeling:** Gained experience in designing and querying MongoDB databases using Mongoose.
- **Error Handling:** Implemented effective error handling and debugging practices.
- **Professional Folder Structuring:** Adopted industry-standard project structures and workflows for maintainability and scalability.
- **Environment Setup:** Configured development environments for Linux and Windows platforms.

---

## Quick Start 🚀

To run this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://wiki.developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)
- A MongoDB instance (local or cloud-based via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Yassinekrn/express-locallibrary-tutorial.git
   cd express-locallibrary-tutorial
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables (if using a custom database):
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     MONGODB_URI=<your_mongodb_connection_string>
     DEBUG=express-locallibrary-tutorial:*
     ```

### Run the Server

4. Start the server:
   ```bash
   # Linux/macOS
   DEBUG=express-locallibrary-tutorial:* npm run devstart

   # Windows Powershell
   $ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000/
   ```

---

## Credits 🙌

This project is a fork of the [MDN Local Library Tutorial](https://github.com/mdn/express-locallibrary-tutorial). While following the tutorial, I added custom code and improvements to enhance functionality and solidify my understanding of Express.js, MongoDB, and project structuring.

---

## Acknowledgments 💡

Thank you to the MDN Web Docs team for providing an excellent resource for learning server-side development. This project has greatly helped me grow as a developer and deepened my understanding of modern web application architecture.

