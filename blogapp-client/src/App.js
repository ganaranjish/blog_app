
/*import Login from "./components/login/Login";*/
import Header from "./components/header/Header";
import { Box } from '@material-ui/core';
import Home from "./components/home/Home";
import React from "react";
import Detailview from "./components/post/DetailView";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/UpdateView";

function App() {
  return (
  
  <BrowserRouter>
      <Header/>
      <Box style={{marginTop: 64}}>
        <Switch>
      <Route exact path = '/' component={Home}/>
      <Route exact path ='/details' component={Detailview}/>
      <Route exact path = '/create' component={CreateView}/>
      <Route exact path = '/update' component={UpdateView}/>
      </Switch>
      </Box>
 </BrowserRouter>
  );
}

export default App;
