import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Inbox from './Inbox/Inbox';

class Main extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <Route path="/" component={Inbox}/>
            </div>
        )
    }
}


export default Main;