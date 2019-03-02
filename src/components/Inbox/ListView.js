import React, { Component } from 'react';
import axios from 'axios';

class ListView extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            emailList : []
        }

        //bind


    }

    componentDidMount(){
        //axios.defaults.withCredentials=true;
        for(var i=1;i<=5;i++){
            axios.get('http://5c5a21f9af3ff700140de477.mockapi.io/api/email/'+i)
            .then((response)=>{
                
                var email = {
                    sender: response.data.from,
                    subject: response.data.subject
                };
              var resArray = this.state.emailList;
              resArray.push(email);
                this.setState({
                    emailList : resArray
                });
                console.log(this.state.emailList);
            });
        }
        
    }

    render() {

        var mailListContent = null;
        if(this.state.emailList.length > 0){
            mailListContent = this.state.emailList.map((email, index) =>{
                return (
                    <div className="row mt-2 pb-3 border-bottom email-list-item" key={index} id={index+1} onClick={this.props.toggleEmailView}>
                    <div className="col-3" id={index+1}>
                        <div className="container" id={index+1}>
                            <div id={index+1}><input id={index+1} type="checkbox" className="ml-2 mr-3 chkbox" /> {email.sender}</div>
                        </div>
                    </div>
                    <div className="col-9" id={index+1}>
                       {email.subject}
                    </div>
                    <hr/>
                </div>

                
                )
            })
        }
        

        return (
            <div>
                {mailListContent}
                {/* <div className="row mt-2" onClick={this.props.toggleEmailView}>
                    <div className="col-3">
                        <div className="container">
                            <div><input type="checkbox" className="ml-2 mr-3 chkbox" /> xyz@gmail.com</div>
                        </div>
                    </div>
                    <div className="col-9">
                        content of email
                    </div>
                </div>
                <hr />
                <div className="row mt-2">
                    <div className="col-3">
                        <div className="container">
                            <div><input type="checkbox" className="ml-2 mr-3 chkbox" /> xyz@gmail.com</div>
                        </div>
                    </div>
                    <div className="col-9">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
                <hr /> */}
            </div>
        )
    }
}

export default ListView;