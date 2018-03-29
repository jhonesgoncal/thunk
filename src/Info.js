import React from 'react'
import { connect } from 'react-redux'
import { loadData } from './Actions'

export class Info extends React.Component{

    componentDidMount(){
        this.props.loadData()
    }

    render(){
        if(this.props.isFetching){
            return <span>Loading...</span>
        }
        else if(!this.props.isFetching){
            return <span>Info: {JSON.stringify(this.props.data)}</span>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);