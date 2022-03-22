import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavbarComponent'
import {Container} from 'react-bootstrap'
import LandingPage from './Components/LandingPage';
import Posts from './Components/Posts/Posts';
import Post from './Components/Posts/Post';
import Signup from './Components/Signup'
import Login from './Components/Login'
import About from './Components/About';
import Contact from './Components/Contact';
import Count from './Components/Count'
import HOC from './Components/HOC';
import {BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Page404 from './Components/Page404';
import {Provider} from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Container className='mt-5'>
          {/* <Link to='/'>Home</Link> &emsp;
          <Link to='/posts'>Posts</Link> */}
          <Routes>

            <Route path='/' element={<LandingPage />} />
          
            <Route path='/posts' element={<Posts />} />
            {/* <Route path='/posts/1' element={<Post />} /> */} {/* Only for single post i.e. 1st post*/}
            <Route path='/posts/:id' element={<Post />} />       {/* For any post because we are using a variable :id*/}
            {/* <Route path='/posts/:id/comments/:id2' /> */}   {/*Using 2 parameters*/}

            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />

            <Route path='/about' element={< HOC component={About} />} />
            <Route path='/contact' element={< HOC component={Contact} />} />

            <Route path='/count' element={<Count />} />

            <Route path='*' element={<Page404 />} />      
            
          </Routes>  
        </Container>
      </Router> 
    </Provider>
  );
}

export default App;
