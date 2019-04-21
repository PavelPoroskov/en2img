import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import {inject, observer} from 'mobx-react';

//const style = {
//    margin: 12,
//};
//            <Button variant="contained" color="primary" style={style} onClick={this.search.bind(this)}>

@inject('search')
@observer
export default class Form extends React.Component{
    setSearchTerm(evt){
        this.props.search.changeSearchTerm(evt.target.value)
    }

    search(){
        this.props.search.requestPics();
    }

    getButton(){
        return (
            <Button variant="contained" color="primary" onClick={this.search.bind(this)}>
              SEARCH
            </Button>
        )
    }

    getSpinner(){
        return (
            <CircularProgress size={35} thickness={5}/>
        )
    }

    render(){
        return (
            <div>
                <TextField hintText="e.g. Bear" onBlur={this.setSearchTerm.bind(this)}/>
                {
                    this.props.search.isSearching ? this.getSpinner() : this.getButton()
                } 
            </div>
        )
    } 
}