import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../src/pages/Home/Home.jsx'
import Login from '../src/pages/authentication/Login.jsx'
import SignUp from '../src/pages/authentication/Signup.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ],
);

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
      <RouterProvider router={router} />
    </Provider>
  </>
)
