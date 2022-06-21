import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
<<<<<<< HEAD
import Anfitrion from './pages/Anfitrion';
import Experiencia from './pages/Experiencia';
import ReservaRoom from './pages/ReservaRoom';
import Prueba from './pages/Prueba';

=======
import Host from './pages/Host';
import BookingRoom from './pages/BookingRoom';
import NotFound from './pages/NotFound';
import HostDashboard from './pages/HostDashboard';
import MessagesHost from './pages/MessagesHost';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import { getUser } from './store/reducers/User.reducer';
import RecoveryPassword from './pages/RecoveryPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> 2422d41b137ca47cebcc1df4601361de39a1c643
function App() {
  const token = localStorage.getItem('token');
  const { role } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }
  }, [dispatch]);
  console.log(role);

  return (
    <div className="App">
              <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/" element={<Home />} />
<<<<<<< HEAD
          <Route exact path="/anfitrion" element={<Anfitrion></Anfitrion>} />
          <Route
            exact
            path="/experiencia"
            element={<Experiencia></Experiencia>}
          />
          <Route
            exact
            path="/reservasroom"
            element={<ReservaRoom></ReservaRoom>}
          />
          <Route exact path="/prueba" element={<Prueba></Prueba>} />
=======
          <Route exact path="/host" element={<Host></Host>} />
          <Route
            exact
            path="/host/dashboard"
            element={token !== null ? <HostDashboard /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/host/messages"
            element={<MessagesHost></MessagesHost>}
          />
          <Route exact path="/room/:id" element={<BookingRoom></BookingRoom>} />
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPassword></ForgotPassword>}
          />
          <Route
            exact
            path="/password-recovery/:token"
            element={<RecoveryPassword></RecoveryPassword>}
          />
          <Route exact path="/profile" element={token !== null ? <Profile/> : <Navigate to="/" /> }/>
          <Route exact path="*" element={<NotFound></NotFound>} />
>>>>>>> 2422d41b137ca47cebcc1df4601361de39a1c643
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
