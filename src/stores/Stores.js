import PhotoGalleryStore from './PhotoGalleryStore';
import SearchStore from './SearchStore';
import SelectedPictureStore from './SelectedPictureStore';
import Model from '../models/GalleryModel';

const model = new Model();
const photoGallery = new PhotoGalleryStore(model);
const search = new SearchStore(model);
const selectedPicture = new SelectedPictureStore(model);

export {
    photoGallery,
    search,
    selectedPicture
}