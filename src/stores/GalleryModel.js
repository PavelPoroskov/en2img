import { autorun, makeObservable, observable } from "mobx";

export default class GalleryModel {
  constructor() {
    this.searchTerm = "";
    this.picsList = [];
    this.selectedPictureURL = null;
    
    makeObservable(this, { 
      searchTerm: observable, 
      picsList: observable, 
      selectedPictureURL: observable 
    })

    autorun(() => {
      if (this.picsList.length > 0) {
        this.selectedPictureURL = this.picsList[0].large_image;
      } else {
        this.selectedPictureURL = null;
      }
    });
  }
}
