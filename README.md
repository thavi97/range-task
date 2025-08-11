# Office Essentials Product List

React frontend with a PHP API backend.

---

## 📦 Dependencies
- **Node.js** (v18+)
- **npm** (comes with Node.js)
- **Apache** with **PHP** enabled (XAMPP, MAMP, WAMP, or native install)

---

## 🚀 Running the Project

### 1. Install location
Install the project in your Apache document root (e.g., `htdocs` for XAMPP)  

### 2. Go into the project folder (eg ./htdocs/range-task) and install dependencies
```bash
npm install
```

### 3. Start the React app from the project folder
```bash
npm run dev
```
Open the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

### 4. Start Apache server
Make sure the project is in your Apache document root (e.g., `htdocs` for XAMPP)  
Make sure PHP is enabled and Apache is running.

The API will be available at:
```
http://localhost/range-task/api/retrieve-products.php
```

---