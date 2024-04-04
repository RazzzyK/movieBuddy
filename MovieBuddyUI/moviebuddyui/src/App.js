import './App.css';
import { Login } from './pages/Login';
import Register from './pages/Registration';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      
      <Navbar/>
        <Routes>
          
            <Route index element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;