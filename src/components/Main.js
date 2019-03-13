import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Inbox from './Inbox/Inbox';
import Display from './Display/Display';

class Main extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <Route exact path="/" component={Inbox}/>
                <Route path="/display" component={Display} />
            </div>
        )
    }
}


export default Main;