import React from 'react'
import { Slidebar } from './componen/Slidebar';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Attendance } from './pages/Attendance';
import { Table } from './pages/Table';
import { Contact } from './pages/Contact';


export const App = () => {
  return (
<>
<Slidebar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/form' element={<Table/>}/>
  <Route path='/attendance' element={<Attendance/>}/>
  <Route path='/contact' element={<Contact/>}/>

</Routes>
</>
  )
}
 export default App;