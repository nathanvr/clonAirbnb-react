import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Host from './pages/Host';
import Experiencia from './pages/Experiencia';
import ReservaRoom from './pages/ReservaRoom';
import NotFound from './pages/NotFound';
import HostDashboard from './pages/HostDashboard';
import MessagesHost from './pages/MessagesHost';
import SubNavbar from './components/host/SubNavbar';
import Prueba from './pages/Prueba';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './components/ChangePassword';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Navbar></Navbar>
      
        <Routes>
          <Route index element={<Home />}></Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/host" element={<Host></Host>} />

          <Route exact path="/host/dashboard" element={<HostDashboard></HostDashboard>}></Route>
          <Route exact path="/host/messages" element={<MessagesHost></MessagesHost>}></Route>
          <Route exact path="/experiencia" element={<Experiencia></Experiencia>}/>
          <Route exact path="/reservasroom" element={<ReservaRoom></ReservaRoom>} />
          <Route exact path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}/>
          <Route exact path="*" element={<NotFound></NotFound>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
