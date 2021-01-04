import React , {Component} from 'react';
import './App.css';
import  {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import MainBodyComponent from './Components/MainBodyComponent';
import NavbarComponent from './Components/NavbarComponent';
import MainBookPage from './Components/MainBookPage';
import AddBookComponent from './Components/AddBookComponent';


/* function App() {
  return (
   <div>
     <h2>Hello World</h2>
   </div>
  );
} */

class App extends Component {
  render(){
    return(
      <div>
        
        
       <Router>
        <NavbarComponent />
          <Route exact path="/" render={ props => (
            <React.Fragment>
            <MainBodyComponent />
            </React.Fragment>
          )}/>
          <Route exact path="/book" render={ props => (
            <React.Fragment>
            <MainBookPage />
            </React.Fragment>
          )}/>
          <Route exact path="/addbook" render={ props => (
            <React.Fragment>
           <AddBookComponent />
            </React.Fragment>
          )}/>
          <Route exact path="/student" render={ props => (
             <React.Fragment>
             <MainBookPage />
             </React.Fragment>
          )}/>
        </Router>
      </div>
    )
  }
}

export default App;