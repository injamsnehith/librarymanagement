import React, { Component } from 'react';
import axios from 'axios'
class AddBookComponent extends Component {
    state = {
        bookID : "",
        bookName : "",
        bookAuthor : "",
        bookEdition : ""
    }

    submitForm = ()=>{
        axios.post("http://localhost:5000/book/addBook" , 
        {
            bookID : this.state.bookID,
            bookName : this.state.bookName,
            bookAuthor : this.state.bookAuthor,
            bookEdition : this.state.bookEdition
        }
    ).then(res => {
        if(res.status === 200){
            alert("Book Added Successfully")
        }
    })
}

    render() {
        return (
            <div className="container">
                <form onSubmit={(e)=>{e.preventDefault();this.submitForm()}}>
                <div className="form-row">
                     <div className="form-group col-6">
                        <label>Book ID:</label>
                        <input type="text" className="form-control" value={this.state.bookID} onChange={(e)=>{this.setState({bookID:e.target.value})}} placeholder="Enter Book Id" required/>
                     </div> 
                     <div className="form-group col-6">
                        <label>Book Name:</label>
                        <input type="text" className="form-control" value={this.state.bookName} onChange={(e)=>{this.setState({bookName:e.target.value})}} placeholder="Enter Book Name" required/>
                     </div> 
                </div>
                <div className="form-row">
                     <div className="form-group col-6">
                        <label>Book Author:</label>
                        <input type="text" className="form-control" value={this.state.bookAuthor} onChange={(e)=>{this.setState({bookAuthor:e.target.value})}} placeholder="Enter Book Author" required/>
                     </div> 
                     <div className="form-group col-6">
                        <label>Book Edition:</label>
                        <input type="text" className="form-control" value={this.state.bookEdition} onChange={(e)=>{this.setState({bookEdition:e.target.value})}} placeholder="Enter Book Edition" required/>
                     </div>                    
                </div>
                <button type="submit" className="btn btn-primary">Add Book</button>
                </form>
            </div>
        );
    }
}

export default AddBookComponent;