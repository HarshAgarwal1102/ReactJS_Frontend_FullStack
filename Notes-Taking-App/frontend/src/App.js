// import logo from './logo.svg';
import './App.css';
import Add from './modules/notes/components/Add';
import View from './modules/notes/components/View';
import { NotesDashboard } from './modules/notes/pages/NotesDashboard';
import { LoginPage } from './modules/users/pages/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return(
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/dashboard' element={<NotesDashboard/>}>
        <Route path='add-note/:operationname' element={<Add/>}/>
        <Route path='view-notes' element={<View/>}/>
        </Route>
    </Routes>
  );
}

export default App;