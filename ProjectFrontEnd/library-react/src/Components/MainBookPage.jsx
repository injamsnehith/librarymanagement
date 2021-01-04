import React, { Component } from 'react';

class MainBookPage extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <img style={{height : 300 + 'px'}} src="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"/>
                </div>
                <div className="col-6">
                    <hr />
                   <a href="/addbook"><button className="btn btn-primary" style={{width:100 + '%'}}>Add Book</button></a><hr />
                    <button className="btn btn-primary" style={{width:100 + '%'}}>List Books</button><hr />
                    <button className="btn btn-primary" style={{width:100 + '%'}}>Delete Book</button><hr />
                    <button className="btn btn-primary" style={{width:100 + '%'}}>Edit Book</button><hr />
                </div>
            </div>
        );
    }
}

export default MainBookPage;