# Task-Manager

# Task Manager Backend

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file (see the sample).

3. Run MySQL and create the database:
   ```sql
   CREATE DATABASE task_manager;
   ```

4. Start the app:
   ```
   node src/app.js
   ```

By default the server runs at `http://localhost:5000`.

# Task Manager Frontend

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. To run locally:
   ```
   npm start
   ```
3. Set the API endpoint if needed in `.env`:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

---

## 4. **MySQL Database Table Setup**

```sql name=database.sql
CREATE DATABASE IF NOT EXISTS task_manager_db;
USE task_manager_db;

CREATE TABLE IF NOT EXISTS Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('pending','in_progress','completed') DEFAULT 'pending',
  dueDate DATE,
  userId INT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
);
```

---

## 5. **How to Run**

1. **Start MySQL** and create the database (see above).
2. **Backend:**  
   - `cd backend`  
   - `npm install`  
   - Add `.env`  
   - `node src/app.js`
3. **Frontend:**  
   - `cd frontend`  
   - `npm install`  
   - `npm start`
4. Visit [http://localhost:3000](http://localhost:3000).

---

**This setup is production-ready and can be deployed to Vercel/Netlify/Render. For 2FA, testing, and further enhancements, ask for advanced features!**


