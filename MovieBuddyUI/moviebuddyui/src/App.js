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
    <div className='App'>
    <Provider store={store}>
      <BrowserRouter>
      
      <Navbar/>
        <Routes>
          
            <Route index element={<Homepage />} />
            <Route path="/login" element={<Register />} />
            {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;