import { useState } from 'react'
import {Route, Routes} from "react-router-dom";
import './App.css'
import IndexPage from './pages/IndexPage';
import DataAnalysis from './pages/DataAnalysis';
import WebDevelopment from './pages/WebDevelopment';
import Ethereum from './pages/Ethereum';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="/" element={<IndexPage/>} >
        <Route path="/" element={<DataAnalysis/>}/>
        <Route path="/web" element={<WebDevelopment />}/>
        <Route path="/ethereum" element={<Ethereum />}/>
      </Route>
    </Routes>
  )
}

export default App
