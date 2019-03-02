import React, {Component} from 'react';
import ListView from './ListView';
import CreateView from './CreateView';
import EmailView from './EmailView';

class Inbox extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state= {
            isListSelected : true,
            isCreateSelected : false,
            displayEmail: false
        }

        //bind
        this.toggleListSelect = this.toggleListSelect.bind(this);
        this.toggleCreateSelect = this.toggleCreateSelect.bind(this);
        this.toggleEmailView = this.toggleEmailView.bind(this);
        
    }

    toggleListSelect = (event) =>{
        this.setState({
            isListSelected : true,
            isCreateSelected : false,
            displayEmail: false
        });
    }

    toggleCreateSelect = (event) =>{
        this.setState({
            isListSelected : false,
            isCreateSelected : true,
            displayEmail: false
        });
    }

    toggleEmailView = (event)=>{
        //console.log('inside' + email + content);
        this.setState({
            displayEmail: true,
            isListSelected : false
        });
    }

    render(){

        var listView = null;

        if(this.state.isListSelected === true){
            listView = <ListView toggleEmailView = {this.toggleEmailView}/>
        }

        var createView = null;

        if(this.state.isCreateSelected === true){
            createView = <CreateView/>
        }

        var emailView = null;

        if(this.state.displayEmail === true){
            emailView = <EmailView/>
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
                {emailView}
            </div>
        )
    }
}

export default Inbox;