
import './App.css'
import GetStarted from './components/GetStarted'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirebaseProvider from './contexts/FirebaseProvider';
import Todos from './components/Todos';
function App() {

  return (
    <>
    <FirebaseProvider>
      <Router>
        <Routes>
        <Route path='signup' element={<SignUp />} />
        <Route path='signin' element={<SignIn />} />
        <Route path="" element={<GetStarted />} />
        <Route path="todos" element={<Todos />} />
        </Routes>

      </Router>
      </FirebaseProvider>
    </>
  )
}

export default App
