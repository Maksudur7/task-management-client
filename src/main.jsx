import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Login from './Login paige and regster paige/Login.jsx';
import Regster from './Login paige and regster paige/Regster.jsx';
import DashBoard from './Dash Board/DashBoard.jsx';
import TaskManagement from './Dash Board/Task management/TaskManagement.jsx';
import Attendance from './Dash Board/Attendance/Attendance.jsx';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import AuthProvider from './Auth provider/AuthProvider.jsx';
import PraivetRoute from './PraivetRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/regster',
        element: <Regster></Regster>
      },
      {
        path: '/dashboard',
        element: <PraivetRoute><DashBoard></DashBoard></PraivetRoute>,
        children: [
          {
            path: 'taskmanagement',
            element: <TaskManagement></TaskManagement>
          },
          {
            path: 'attendance',
            element: <Attendance></Attendance>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </DndProvider>
  </React.StrictMode>,
)
