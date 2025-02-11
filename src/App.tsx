import './App.css'
import Pages from './Pages/Pages'
import Faqs from './Pages/Faqs/Faqs';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Pages />

      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </>
  );
}

export default App
