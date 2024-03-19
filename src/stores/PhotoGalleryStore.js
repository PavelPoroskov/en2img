import { makeObservable, computed, action } from 'mobx'

export default class PhotoGalleryStore {
  constructor(model){
    this.model = model;
    makeObservable(this, { 
      pics: computed, 
      totalPics: computed, 
      selectedPicture: action 
    })
  }

  get pics(){
    return this.model.picsList
  }

  get totalPics(){
    return this.model.picsList.length;
  }

  selectedPicture(url){
    this.model.selectedPictureURL = url;
  }
}