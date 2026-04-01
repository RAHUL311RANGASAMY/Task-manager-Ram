# Task Manager App - MERN Stack

A simple and elegant task management application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

## 📋 Features

✅ **Create Tasks** - Add tasks with title and description
✅ **View Tasks** - Display all tasks in a clean interface
✅ **Update Status** - Mark tasks as Pending or Completed
✅ **Delete Tasks** - Remove tasks you no longer need
✅ **Filter Tasks** - Filter by task status (All, Pending, Completed)
✅ **Due Dates** - Add optional due dates to tasks
✅ **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - Object modeling for MongoDB
- **CORS** - Cross-Origin Resource Sharing
- **Dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with responsive design

## 📁 Project Structure

```
task-manager/
├── backend/                    # Backend server
│   ├── models/
│   │   └── Task.js            # Task MongoDB schema
│   ├── routes/
│   │   └── tasks.js           # Task API routes
│   ├── server.js              # Express server setup
│   ├── package.json           # Backend dependencies
│   └── .env.example           # Environment variables template
│
├── frontend/                  # React application
│   ├── public/
│   │   └── index.html         # HTML entry point
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx   # Task creation form
│   │   │   ├── TaskList.jsx   # Task list display
│   │   │   ├── TaskItem.jsx   # Individual task component
│   │   │   ├── TaskForm.css   # Task form styling
│   │   │   ├── TaskList.css   # Task list styling
│   │   │   └── TaskItem.css   # Task item styling
│   │   ├── App.js             # Main app component
│   │   ├── App.css            # Main app styling
│   │   ├── index.js           # React entry point
│   │   └── index.css          # Global styling
│   └── package.json           # Frontend dependencies
│
└── README.md                  # Project documentation
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **npm** (comes with Node.js) or **yarn**

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
cd task-manager
```

### 2. Setup Backend

#### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

#### Step 2: Create Environment File
Create a `.env` file in the `backend` folder:
```bash
cp .env.example .env
```

Then edit `.env` and add your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/task-manager
PORT=5000
NODE_ENV=development
```

**For MongoDB Atlas (Cloud Database):**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/task-manager?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

#### Step 3: Start Backend Server
```bash
# For development (with auto-reload using nodemon)
npm run dev

# Or for production
npm start
```

The backend server will start on `http://localhost:5000`

### 3. Setup Frontend

#### Step 1: Install Frontend Dependencies
Open a new terminal and navigate to the frontend folder:
```bash
cd frontend
npm install
```

#### Step 2: Start React Development Server
```bash
npm start
```

The frontend will start on `http://localhost:3000`

### 4. MongoDB Setup

#### Option 1: Local MongoDB
If you have MongoDB installed locally, ensure the service is running:

**Windows:**
```bash
# MongoDB should be running as a service
# Check Services app (press Win+R, type services.msc)
```

**Mac:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

#### Option 2: MongoDB Atlas (Recommended for Beginners)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get your connection string
5. Add it to your `.env` file

## 📱 Usage

### Create a Task
1. Fill in the task title (required)
2. Add a description (optional)
3. Set a due date (optional)
4. Click "Add Task"

### Mark Task as Complete
- Click the status dropdown in the task and select "Completed"
- The task will have a strikethrough effect

### Delete a Task
- Click the "Delete" button on the task
- Confirm the deletion

### Filter Tasks
- Use the filter buttons to view:
  - **All** - Show all tasks
  - **Pending** - Show only pending tasks
  - **Completed** - Show only completed tasks

## 🔌 API Endpoints

The backend provides the following REST API endpoints:

### Tasks
- **GET** `/api/tasks` - Get all tasks
- **GET** `/api/tasks/:id` - Get a specific task
- **POST** `/api/tasks` - Create a new task
- **PUT** `/api/tasks/:id` - Update a task
- **DELETE** `/api/tasks/:id` - Delete a task

### Health Check
- **GET** `/api/health` - Check server status

## 📦 Base URL
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`

## 🎨 Customization

### Change Colors
Edit the gradient colors in `frontend/src/index.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add More Fields
1. Update the Task schema in `backend/models/Task.js`
2. Update the form in `frontend/src/components/TaskForm.jsx`
3. Update the task item display in `frontend/src/components/TaskItem.jsx`

## ⚠️ Troubleshooting

### Issue: "Cannot connect to MongoDB"
- **Solution:** Ensure MongoDB is running or update `MONGODB_URI` in `.env` with correct connection string

### Issue: CORS Error
- **Solution:** Make sure the backend is running on port 5000 and the proxy in `frontend/package.json` is set correctly

### Issue: Package not installed
- **Solution:** Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

### Issue: Port already in use
- **Solution:** Change the port in `.env` or kill the process using that port:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  ```

## 🚀 Deployment

### Deploy Backend (Heroku, Render, or Railway)
1. Push your code to GitHub
2. Connect your repo to the hosting platform
3. Set environment variables in the platform dashboard
4. Deploy

### Deploy Frontend (Vercel, Netlify)
1. Push your code to GitHub
2. Connect frontend folder to Vercel/Netlify
3. Deploy

## 📝 Future Enhancements

- [ ] User authentication (Login/Signup)
- [ ] Task categories/projects
- [ ] Task priority levels
- [ ] Recurring tasks
- [ ] Task reminders
- [ ] Dark mode
- [ ] Export tasks to PDF/CSV

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created as a simple task management solution.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Happy Task Managing! 🎉**
