import React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';

import About from './components/about';
import Contact from './components/contact';
import Vacancy from './components/vacancy';



class Router extends React.Component{

    render(){
        return(

            <Switch>
                <Route path="/about" exact component ={About}/>
                <Route path="/contact" exact component ={Contact}/>
                <Route path="/vacancy" exact component ={Vacancy}/>
            </Switch >
        )
    }
}

export default Router;