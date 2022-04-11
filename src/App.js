import React  from 'react';
import EditPage from './pages/editProfile';
import SelectCountry from './pages/selectCountry';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>

    <BrowserRouter>
     <Routes>
       {/* <Route path='/settings/profile' element={<EditPage />}/> */}
       <Route path='/' element={<SelectCountry />}/>
     </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
