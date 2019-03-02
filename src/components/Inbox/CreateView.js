import React, {Component} from 'react';

class CreateView extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <div className="pt-3 pb-3 ml-5">
                    <label htmlFor="to">To: </label>
                    <input type="text" className="input-lg ml-2"></input>
                </div>
                <hr/>
                <div className="pt-3 pb-3 ml-5">
                    <label htmlFor="to">Subject: </label>
                    <input type="text" className="input-lg ml-2"></input>
                </div>
                <hr/>
                <div className="pt-3 pb-3 ml-5">
                    <textarea row="200" cols="75" className="ml-2" placeholder="Type your messsage"></textarea>
                </div>
                <div className="flt-right mr-5">
                    <button className="btn-lg btn-success">Send</button>
                </div>
            </div>
        )
    }
    


}

export default CreateView;