import './App.css';
import {Route, Routes} from 'react-router-dom'
import UserList from './features/Users/UserList';
import AddUser from './features/Users/AddUser';
import EditUser from './features/Users/EditUser';

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">CRUD app</h1>
      <Routes>
        <Route path="/" element={<UserList/>}/>        
        <Route path="/add-user" element={<AddUser/>}/>        
        <Route path="/edit-user/:id" element={<EditUser/>}/>        
      </Routes>
      
    </div>
  );
}

export default App;
