import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
 
class ExamplePDFViewer extends Component {
    constructor(props){
        super(props)
        this.state = {
            numPages: null,
            pageNumber: 1,
        }
    }
  
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <Document
          file={this.props.url}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}
 
export default ExamplePDFViewer