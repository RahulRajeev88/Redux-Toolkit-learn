import { Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
     <NavBar />
     {/* routes */}
     <Routes>
     <Route index path="/" element={<Products/>} />
     <Route path="/cart" element={<Cart/>} />
     </Routes>
    </div>
  );
}

export default App;
