import React, { Component } from 'react';

class ListView extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <div className="row mt-2">
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
                <hr />
            </div>
        )
    }
}

export default ListView;