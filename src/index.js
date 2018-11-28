import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

import Router from './router';

// import Home from './components/home';

class Main extends React.Component{

    render(){
        return(
            <div>
                {/* <Home/> */}
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

