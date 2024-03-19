import { observable, computed, action, flow, makeObservable } from 'mobx';
import Config from '../configs/Configuration';

export default class SearchStore {
  constructor(model) {
    this.model = model;
    this.isSearching = false;

    makeObservable(this, {
      isSearching: observable,
      url: computed,
      changeSearchTerm: action,
      requestPics: flow,
    })
    //testing
    this.changeSearchTerm('cat')
    this.requestPics()
  }

  get url() {
    return Config.getSearchURL(this.model.searchTerm);
  }

  changeSearchTerm(term) {
    this.model.searchTerm = term;
  }

  *requestPics() {
    this.isSearching = true;

    try {
      const response = yield fetch(this.url);
      const jsonData = yield response.json();
  
      this.isSearching = false;
      this.model.picsList = jsonData.photos.photo.map(value => ({
        id: value.id,
        title: value.title,
        image: Config.getPicURL(value),
        large_image: Config.getLargePicURL(value)
      }));
    } catch (err) {
      this.isSearching = false;
    }
  }
}