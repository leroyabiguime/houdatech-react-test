import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactCreate from "./components/ContactCreate";
import Navbar from './components/Navbar'
import Contacts from './components/Contacts'
import ContactUpdate from "./components/ContactUpdate";
import VoirContact from "./components/ContactVoir";

function App() {
  return (
    <Router>
     <div>
     <Navbar />
     <Switch>
       <Route exact path='/' component={Contacts} />
       <Route path='/create' component= {ContactCreate} />
       <Route path='/update/:id' component= {ContactUpdate} />
       <Route path='/watch/:id' component= {VoirContact} />
     </Switch>
     </div>
    </Router>
  )
}

export default App;
