import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SnsPage from './components/SnsPage';
import BlogPage from './components/BlogPage';

function App() {
  return (
  <Router>
  <div className="App">
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/sns" element={<SnsPage />} />
    </Routes>
  </div>
  </Router>
  );
}

export default App;
