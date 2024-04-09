import './App.css';
import Register from './pages/Registration';
import { Homepage } from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Bottom_Navbar } from './components/Bottom-Navbar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/Store';
import MoviePosters from './components/MoviePosters';

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
            <Route path="/test" element={<MoviePosters />} />
            {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      <Bottom_Navbar />

      </BrowserRouter>
      </PersistGate>
    </Provider>
    </div>
  );
}

export default App;