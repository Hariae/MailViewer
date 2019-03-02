import React, {Component} from 'react';
import axios from 'axios';

class EmailView extends Component{
    constructor(props){
        super(props);
        console.log('iddd'+ this.props.emailId);

        this.state = {
            emailAddress: "",
            subject: "",
            content: ""
        }
    }

    componentDidMount(){

        axios.get('http://5c5a21f9af3ff700140de477.mockapi.io/api/email/'+this.props.emailId)
            .then((response)=>{
                if(response.status === 200){
                    this.setState({
                        emailAddress: response.data.to,
                        subject: response.data.subject,
                        content: response.data.text
                    })
                }
            });
    }

    
    
   

    render(){


    
        return(
            <div>
                 <div className="pt-3 pb-3 ml-5">
                    <p>To: {this.state.emailAddress}</p>
                </div>
                <hr/>
                <div className="pt-3 pb-3 ml-5">
                    <p>Subject: {this.state.subject}</p>
                </div>
                <hr/>
                <div className="pt-3 pb-3 ml-5">
                    <div>
                   {this.state.content}
                    </div>
                </div>
                <div className="flt-right mr-5">
                <button className="btn-lg btn-info mr-2">Prev</button>
                    <button className="btn-lg btn-primary">Next</button>
                </div>
            </div>
        )
    }
}

export default EmailView;