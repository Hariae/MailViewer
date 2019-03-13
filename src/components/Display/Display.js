import React, { Component } from 'react';
import axios from 'axios';
import {Document, Page} from 'react-pdf';
import {pdfjs} from 'react-pdf';
import sample from './pdf-sample.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Display extends Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <h1>React pdf</h1>
                <Document file={sample} onLoadError={(error)=>console.log(error)}>
                    <Page pageNumber={1} />
                </Document>
            </div>
        )
    }
}

export default Display;