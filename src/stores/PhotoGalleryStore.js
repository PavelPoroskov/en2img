import {observable, computed, action, autorun} from 'mobx'

export default class PhotoGalleryStore {
    constructor(model){
        this.model = model;
    }

    @computed get pics(){
        return this.model.picsList
    }

    @computed get totalPics(){
        return this.model.picsList.length;
    }

    @action selectedPicture(url){
        this.model.selectedPictureURL = url;
    }
}