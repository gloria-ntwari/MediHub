import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Department from './components/department';
import About from "./components/about";
import Doctors from './components/doc';
import Contact from './components/contact';
import Testimonial from './components/testimonial';
import Footer from './components/footer';
import Login from './components/login';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Userhome from './pages/home';
import Dash from './components/dashboard/dash';
import Profile from './components/dashboard/profile';
import Search from './components/dashboard/search';
import Report from './components/dashboard/report';


const routes=createBrowserRouter([
  {
    path:"/",
    element:<Userhome/>
  },
  {
    path:"/login",
    element:<Login/>
  },{
    path:"/dashboard/:userName",
    element:<Dash/>
  },
  {
    path:"/dashboard/:userName/profile",
    element:<Profile/>
  },
  {
    path:"/dashboard/:userName/report",
    element:<Report/>
  },
  {
    path:"/dashboard/:userName/search",
    element:<Search/>
  }
])
function App() {
  return (
    <>
<RouterProvider router={routes}/>
    </>
  )
}
export default App;
