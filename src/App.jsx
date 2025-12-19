import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GithubUsers from './Githubusers.jsx';
import Home from './components/Home.jsx';
import GithubUsersTable  from './GithubusersTable.jsx';
import GithubusersProvider from './GithubusersProvider.jsx';
  
//export const GithubUsersContext = createContext();



function App () {

    return(
           <GithubusersProvider >
             <Router>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/githubusers' element={<GithubUsers/>}/>
                <Route path='/githubusers-table' element={<GithubUsersTable/>}/>
             </Routes>
           </Router>


           </GithubusersProvider>
           
       


    );

}
export default App;


