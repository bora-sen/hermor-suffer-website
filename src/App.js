import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import PhotoCollage from './components/PhotoCollage/PhotoCollage';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
      <main className="container">
        <Navbar />
        <PhotoCollage />
        <ProductList />
      </main>
  );
}

export default App;
