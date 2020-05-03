import React, { Component } from 'react'

class UserSelectedData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finalData: []
        }
    }
   
    render() {
        const {data1} = this.props;
        let selectedData = [];
        selectedData = (data1.length > 0) 
            ? data1.map((data) =>{
                return <li>{data}</li> }
                )
            : <p>User has not choosed any data</p>;  
        
        return (
            <div>
                <h1>List of selected data by user</h1>
                {selectedData}
            </div>
        )
    }
}

export default UserSelectedData;
