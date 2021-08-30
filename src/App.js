import Nav from '../src/components/Nav.jsx';
import Footer from '../src/components/Footer.jsx';
import {BrowserRouter as Router} from 'react-router-dom'; 
function App() {
  return (
    <div>
    <Router>
      <Nav />

      <Footer />
    </Router>
    </div>
  );
}

export default App;
