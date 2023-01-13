import './App.css';
import {lazy} from 'react'
import { NavBar } from './components';
import RouterWrapper from './Router'
const Footer=lazy(()=>import('./components/Footer'))
function App() { 
  return (
    <div className="App">
      <NavBar />
      <section className='section' >
         <RouterWrapper />
      </section>
      <Footer />
    </div>
  );
}

export default App;
