import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ToDo from './Components/ToDo.jsx'
import Posts from './Components/Posts.jsx'
import Photos from './Components/Photos.jsx'
import Stopwatch from './Components/Stopwatch.jsx'
import Counter from './Components/counter.jsx'
import TodoTask from './Components/TodoTask.jsx'
import Form from './Components/form.jsx'
import Search from './Components/search.jsx'
import TabComponent from './Components/TabComponent.jsx'
import ThemeToggle from './Components/ThemeToggle.jsx'
import ThemeProvider from './Components/ThemeContext.jsx'
import Login from './Components/Auth/login.jsx'
import Home from './Components/Auth/Home.jsx'
import About from './Components/Auth/About.jsx'
import Contect from './Components/Auth/Contect.jsx'
import Protected from './Components/Auth/protected.jsx'
import Signup from './Components/Auth/signup.jsx'
const App = () => {
  return (
    <>
   {/* <Posts /> */}
   {/* <Photos /> */}
   {/* <Stopwatch /> */}
   {/* <Counter />
   <TodoTask/>
   <Form/> */}
   {/* <Search/> */}
   {/* <TabComponent/> */}
{/* <ThemeProvider>
   <ThemeToggle/>
   <h1>Welcome to Theme Toggler App</h1>
   <h1>This is sample text to check theme toggling</h1>
</ThemeProvider > */}
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route element={<Protected/>}>
  <Route path='/home' element={<Home/>}/>
  <Route path='/aboout' element={<About/>}/>
  </Route >
<Route path='/contect' element={<Contect/>}/>
</Routes>

</BrowserRouter>
  



    </>
  )
}

export default App