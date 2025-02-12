import './App.css'
import Pages from './Pages/Pages'
import Faqs from './Pages/Faqs/Faqs';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import Wholesale from './Pages/Wholesale/Wholesale';
import { Routes, Route } from 'react-router-dom'
import Stockists from './Pages/Stockists/Stockists';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/stockists" element={<Stockists />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App
