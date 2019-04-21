import React from 'react';
import {observer, inject} from 'mobx-react';
import GridTile from '@material-ui/core/GridListTile';

const styles = {
    gridTile: {
        cursor: 'pointer'
    }
}

@inject('photoGallery')
@observer
export default class Tile extends React.Component{

    selectedPic(e){
        this.props.photoGallery.selectedPicture(this.props.data.large_image)
    }

    render(){
        return (
            <GridTile
                style={styles.gridTile}
                onClick={this.selectedPic.bind(this)}
                title={this.props.data.title}>
                <img src={this.props.data.image} />
            </GridTile>
        )
    }
}