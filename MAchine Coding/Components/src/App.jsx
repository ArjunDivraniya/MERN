import React from 'react'
// import ToDo from './Components/ToDo.jsx'
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
<ThemeProvider>
   <ThemeToggle/>
   <h1>Welcome to Theme Toggler App</h1>
   <h1>This is sample text to check theme toggling</h1>
</ThemeProvider >
  


    </>
  )
}

export default App