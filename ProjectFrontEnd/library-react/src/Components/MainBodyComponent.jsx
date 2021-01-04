import React, { Component } from 'react';

class MainBodyComponent extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <img style={{height : 300 + 'px'}} src="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"/>
                </div>
                <div className="col-6">
                    <hr />
                   <a href="/book"> <button className="btn btn-primary" style={{width:100 + '%'}}>Book Panel</button><hr /></a>
                    <a href="/student"><button className="btn btn-primary" style={{width:100 + '%'}}>Students Panel</button></a><hr />
                </div>
            </div>
        );
    }
}

export default MainBodyComponent;