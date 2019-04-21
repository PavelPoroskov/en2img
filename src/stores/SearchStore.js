import {observable, computed, action} from 'mobx';
import Config from '../configs/Configuration';

export default class SearchStore{
    @observable isSearching = false;

    constructor(model){
        this.model = model;
    }

    @computed get url(){
        return Config.getSearchURL(this.model.searchTerm);
    }

    @action changeSearchTerm(term){
        this.model.searchTerm = term;
    }

    @action requestPics(){
        this.isSearching = true;
        fetch(this.url)
            .then(this.onData)
            .then(this.onResult.bind(this))
    } 

    @action onData(response){
        return response.json();
    }

    @action onResult(response){
        this.isSearching = false;
        this.model.picsList = response.photos.photo.map(value => {
            return {
                id: value.id,
                title: value.title,
                image: Config.getPicURL(value),
                large_image: Config.getLargePicURL(value)
            }
        });
    }
}