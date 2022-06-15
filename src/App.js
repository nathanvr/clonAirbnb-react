import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Host from './pages/Host';
import BookingRoom from './pages/BookingRoom';
import NotFound from './pages/NotFound';
import HostDashboard from './pages/HostDashboard';
import MessagesHost from './pages/MessagesHost';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import { getUser } from './store/reducers/User.reducer';

function App() {
  const token = localStorage.getItem('token');
  const { role } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      console.log('!!Se lanzo useEffect de App!!');
      dispatch(getUser());
    }
  }, [dispatch]);
  console.log(role)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/host" element={<Host></Host>} />
          <Route
            exact
            path="/host/dashboard"
            element={token !== null ? <HostDashboard/> : <Navigate to="/" /> }
          />
          <Route
            exact
            path="/host/messages"
            element={<MessagesHost></MessagesHost>}
          />
          <Route exact path="/room" element={<BookingRoom></BookingRoom>} />
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPassword></ForgotPassword>}
          />
          <Route exact path="/profile" element={token !== null ? <Profile/> : <Navigate to="/" /> }/>
          <Route exact path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
