import { BrowserRouter, Routes, Route } from 'react-router-dom'
import New from './Pages/New'
import Home from './Pages/Home'
import Edit from './Pages/Edit'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/new' element={<New></New>}></Route>
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
