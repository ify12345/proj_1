
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Navbar,Home,About } from './components';

function App() {
  return (
     <div className="bg-gray-900">
    <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
     </div>
  );
}

export default App;
