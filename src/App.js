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
import CreateListing from './pages/CreateListing';
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
<<<<<<< HEAD
<<<<<<< HEAD
          <Route
            exact
            path="/host/dashboard"
            element={<HostDashboard></HostDashboard>}></Route>
          <Route
            exact
            path="/host/messages"
            element={<MessagesHost></MessagesHost>}></Route>
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
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPassword></ForgotPassword>}
          />
          <Route exact path="/pruebas" element={<Prueba></Prueba>} />
          <Route exact path="*" element={<NotFound></NotFound>} />
        </Routes>
        <Routes></Routes>
=======

            <Route exact path="/host/dashboard" element={<HostDashboard></HostDashboard>}></Route>
            <Route exact path="/host/messages" element={<MessagesHost></MessagesHost>}></Route>
            <Route exact path="/host/create-listing" element={<CreateListing/>}></Route>
=======

          <Route exact path="/host/dashboard" element={<HostDashboard></HostDashboard>}></Route>
          <Route exact path="/host/messages" element={<MessagesHost></MessagesHost>}></Route>
          <Route exact path="/experiencia" element={<Experiencia></Experiencia>}/>
>>>>>>> 4da3de69c5e5dc60c791083495e9f747d395f8ed
          <Route exact path="/reservasroom" element={<ReservaRoom></ReservaRoom>} />
          <Route exact path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}/>
          <Route exact path="*" element={<NotFound></NotFound>}/>
        </Routes>
<<<<<<< HEAD
>>>>>>> 61f7c00968f9f285db79e6b9b86fb1b01c5b27f0
=======
>>>>>>> 4da3de69c5e5dc60c791083495e9f747d395f8ed
      </BrowserRouter>
    </div>
  );
}

export default App;
