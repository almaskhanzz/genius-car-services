import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Expert from './Pages/Home/Expert/Expert';
import Experts from './Pages/Home/Experts/Experts';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import ResetPassword from './Pages/Login/ResetPassword/ResetPassword';
import Loading from './Pages/Shared/Loading/Loading';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/experts' element={
          <RequireAuth>
            <Experts />
          </RequireAuth>
        } />
        <Route path="/expert" element={
          <RequireAuth>
            <Expert />
          </RequireAuth>
        } />
        <Route path="/checkout/:serviceId" element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path="/addservice" element={
          <RequireAuth>
            <AddService />
          </RequireAuth>
        } />
        <Route path="/manage" element={
          <RequireAuth>
            <ManageServices />
          </RequireAuth>
        } />
        <Route path='/expert' element={<Expert />} />
        <Route path='/service/:serviceId' element={<ServiceDetails />} />
        <Route path='/about' element={< About />} />
        <Route path='/login' element={< Login />} />
        <Route path='/register' element={< Register />} />
        <Route path='/resetpassword' element={< ResetPassword />} />
        <Route path='/loading' element={< Loading />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
