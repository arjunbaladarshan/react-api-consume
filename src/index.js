import React from 'react';
import ReactDOM from 'react-dom/client';
import Subjects from './Subjects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import DemoEffect from './DemoEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/subjects' element={<Subjects/>}/>
          <Route path='/demoeffect' element={<DemoEffect/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

