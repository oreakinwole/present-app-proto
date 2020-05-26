import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Start from './pages/Start';
import Profile from './pages/Profile';
import Store from './pages/Store';

// toast for notification
toast.configure(
    {
        autoClose: 5000,
        closeOnClick: false,
        draggable: true,
        hideProgressBar: false,
        newestOnTop: true,
        pauseOnHover: true,
        pauseOnVisibilityChange: true,
        position: 'top-center',
        rtl: false,
    }
);

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/start" component={Start} />
        <Route path="/profile" component={Profile} />
        <Route path="/store" component={Store} />
    </BrowserRouter>
);

export default App;
