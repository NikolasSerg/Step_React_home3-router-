import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import './index.css';

import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import Comp3 from './components/comp3';

class Main extends React.Component{

    render(){
        return(
            <nav>
                <Comp1 />
                <Comp2 />
                <Comp3 />
            </nav>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

