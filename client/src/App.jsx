
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav';
import Order from "./pages/Order";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <>
    <BrowserRouter>
    {/*Top Navigation*/}
    <TopNav />
    <Routes>
      <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/order" element={<Order />} />
      
    </Routes>
    </BrowserRouter>
     <h4 className='mt-3'>Parcel Delivery</h4>
     <Order/>
     </>
  );
}

export default App
