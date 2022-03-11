import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavbarComponent'
import {Container} from 'react-bootstrap'
import LandingPage from './Components/LandingPage';
import Posts from './Components/Posts/Posts';
import Post from './Components/Posts/Post';
import Signup from './Components/Signup'
import Login from './Components/Login'
import {BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Page404 from './Components/Page404';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        {/* <Link to='/'>Home</Link> &emsp;
        <Link to='/posts'>Posts</Link> */}
        <Routes>

          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/posts' element={<Posts />} />
          {/* <Route path='/posts/1' element={<Post />} /> */} {/* Only for single post that is 1st post*/}
          <Route path='/posts/:id' element={<Post />} />       {/* For any post because we are using a variable :id*/}
          <Route path='*' element={<Page404 />} />      
          
        </Routes>  
      </Container>
    </Router> 
  );
}

export default App;
