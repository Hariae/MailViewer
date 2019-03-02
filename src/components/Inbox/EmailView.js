import React, {Component} from 'react';
import axios from 'axios';

class EmailView extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
                 <div className="pt-3 pb-3 ml-5">
                    <p>To: xyz@gmail.com</p>
                </div>
                <hr/>
                <div className="pt-3 pb-3 ml-5">
                    <p>Subject: Subject</p>
                </div>
                <hr/>
                <div className="pt-3 pb-3 ml-5">
                    <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
                <div className="flt-right mr-5">
                    <button className="btn-lg btn-success">Send</button>
                </div>
            </div>
        )
    }
}

export default EmailView;