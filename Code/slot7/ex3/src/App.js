import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import GridSection from './components/GridSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <GridSection />
      <Footer />
    </div>
  );
}

export default App;