import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';
import Product from './pages/Product.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path='*' element={<Navigate replace to="/404" />} />
      <Route path='/404' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
