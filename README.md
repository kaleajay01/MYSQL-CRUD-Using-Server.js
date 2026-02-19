# MYSQL-Crud-Using-Server.js

# CRUD Operations Explanation

## 📌 What is CRUD?

**CRUD** represents the four basic operations that can be performed on data in any application or database system.

CRUD stands for:

- **C – Create**
- **R – Read**
- **U – Update**
- **D – Delete**

These operations are essential for managing data in web applications.

---

## ➕ CREATE Operation

### Purpose:
The **Create** operation is used to **add new data** to the database.

### How it Works:
- The client sends data to the server.
- The server validates the data.
- A new record is saved in the database.

### Example:
Creating a new user with name, email, and age.

### Result:
A new record is stored in the database.

---


## 📖 READ Operation

### Purpose:
The **Read** operation is used to **retrieve existing data** from the database.

### Types of Read:
1. Read all records
2. Read a single record by ID

### How it Works:
- The client sends a request to the server.
- The server fetches data from the database.
- The data is returned to the client.

### Result:
Stored data is displayed to the user.

---

## ✏️ UPDATE Operation

### Purpose:
The **Update** operation is used to **modify existing data** in the database.

### How it Works:
- The client sends updated data with a record ID.
- The server finds the record in the database.
- The record is updated with new values.

### Example:
Updating a user's age or email.

### Result:
The existing record is modified.

---

## ❌ DELETE Operation

### Purpose:
The **Delete** operation is used to **remove data** from the database.

### How it Works:
- The client sends a delete request with a record ID.
- The server finds the record.
- The record is permanently removed from the database.

### Result:
The data is deleted and cannot be recovered.

---
---
---
