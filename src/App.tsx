import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome/Welcome.tsx';
import Contact from './components/contact/Contact.tsx'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

