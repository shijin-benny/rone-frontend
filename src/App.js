import React  from 'react';
import EditPage from './pages/editProfile';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>

    <BrowserRouter>
     <Routes>
       <Route path='/settings/profile' element={<EditPage />}/>
     </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
