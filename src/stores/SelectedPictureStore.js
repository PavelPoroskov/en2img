import {computed, action} from 'mobx';

export default class SelectedPictureStore{
    constructor(model){
        this.model = model;
    }

    @computed get picPath(){
        return this.model.selectedPictureURL || ""
    }
}