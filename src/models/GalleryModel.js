import {autorun, observable} from 'mobx'

export default class GalleryModel{
    @observable searchTerm = "";
    @observable picsList = [];
    @observable selectedPictureURL = null;

    constructor(){
        autorun(()=> {
            if(this.picsList.length > 0){
                this.selectedPictureURL = this.picsList[0].large_image
            }
        })
    }
}