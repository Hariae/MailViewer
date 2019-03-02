import React, {Component} from 'react';
import ListView from './ListView';
import createView from './CreateView';
import CreateView from './CreateView';

class Inbox extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state= {
            isListSelected : true,
            isCreateSelected : false
        }

        //bind
        this.toggleListSelect = this.toggleListSelect.bind(this);
        this.toggleCreateSelect = this.toggleCreateSelect.bind(this);
        
    }

    toggleListSelect = (event) =>{
        this.setState({
            isListSelected : true,
            isCreateSelected : false
        });
    }

    toggleCreateSelect = (event) =>{
        this.setState({
            isListSelected : false,
            isCreateSelected : true
        });
    }

    render(){

        var listView = null;

        if(this.state.isListSelected === true){
            listView = <ListView/>
        }

        var createView = null;

        if(this.state.isCreateSelected === true){
            createView = <CreateView/>
        }

        return(
            <div>
                <div className="page-header center-align"><b>Mail Viewer</b></div>
                <div className="row">
                    <div className={this.state.isListSelected === true ? "bg-selected col-6 center-align border menu-header" : "col-6 center-align border menu-header"} onClick={this.toggleListSelect}>
                        List
                    </div>
                    <div className={this.state.isCreateSelected === true ? "bg-selected col-6 center-align border menu-header" : "col-6 center-align border menu-header"} onClick={this.toggleCreateSelect}>
                        Create
                    </div>
                </div>
                {listView}
                {createView}
            </div>
        )
    }
}

export default Inbox;