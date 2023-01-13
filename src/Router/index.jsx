import {Routes,Route} from 'react-router-dom'

import React from 'react'
import { HomePage,StreamPage } from '../Pages'

function RouterWrapper() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/stream/:catogery' element={<StreamPage />}></Route>
    </Routes>
  )
    
}

export default RouterWrapper;