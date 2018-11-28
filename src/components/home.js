import React from 'react';
import {Link} from 'react-router-dom';
// import {Router, Switch} from 'react-router-dom';


class Home extends React.Component{

    render(){
        return(
            <nav>
                <ul>
                    <li><Link to="/about"> About </Link></li>
                    <li><Link to="/contact"> Content </Link></li>
                    <li><Link to="/vacancy"> Vacancy </Link></li>
                </ul>
            </nav>  
        )
    }
}

export default Home;