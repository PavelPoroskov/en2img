import { makeObservable, computed } from 'mobx';

export default class SelectedPictureStore{
  constructor(model){   
    this.model = model;
    makeObservable(this, {
      picPath: computed,
    })
  }

  get picPath(){
    return this.model.selectedPictureURL || ""
  }
}