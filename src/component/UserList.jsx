import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getUserData} from '../actions/userAction';
import '../css/UserList.css';
import UserSelectedData from './UserSelectedData';

class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDataCollection : []
        }
    }
    componentDidMount(){
        // axios.get('https://jsonplaceholder.typicode.com/posts/?_limit=5')
        //     .then((response) => {
        //         console.log('response', response);
        //         this.setState({
        //             userData : response.data
        //         })
        //     })

        /** Now calling from actions */
        this.props.getUserData();
    }
    selectUserData = (event) => {
            let checkList = this.state.selectedDataCollection;
            let check = event.target.checked;
            let checkedData = event.target.value;

            if(check){
                this.setState({
                    selectedDataCollection : [...this.state.selectedDataCollection, checkedData]
                })
            } else {
                let index = checkList.indexOf(checkedData);
                if(index > -1){
                    checkList.splice(index, 1);
                    this.setState({
                        selectedDataCollection : checkList
                    }) 
                }
            }
    }
    render(){
        const renderUserData = this.props.userData.map((data) => {
            return (
                <div className="individual-data" key={data.id}>
                    <input type="checkbox"
                        onChange={this.selectUserData} 
                        value = {data.title}
                    />
                    {data.title}
                </div>
            )
        })
        return(
            <div style={{margin: '0 auto', maxWidth: '700px'}}>
                <UserSelectedData data1={this.state.selectedDataCollection} />
                {renderUserData}
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return{
        userData : state.userData.items
    }
}
export default connect(mapStateToProps, {getUserData})(UserList);