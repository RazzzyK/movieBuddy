import './App.css';
import Register from './pages/Registration';
import { Homepage } from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { BottomNavbar } from './components/BottomNavbar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/Store';
import { UserSettings } from './pages/Settings';
import { Pendingpage } from './pages/Pendingpage';
import { Watchedpage } from './pages/Watchedpage';
import './css/BottomNavbar.css';
import AboutPage from './pages/Aboutpage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navbar />
              <Routes>              
                  <Route index element={<Homepage />} />
                  <Route path="/login" element={<Register />} />
                  <Route path='/settings' element={<UserSettings />} />
                  <Route path='/pending' element={<Pendingpage />} />
                  <Route path='/watched' element={<Watchedpage />} />
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/contact' element={<ContactPage />} />
              </Routes>
            <BottomNavbar />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;