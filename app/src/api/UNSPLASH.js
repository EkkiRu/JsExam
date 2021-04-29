import instanceAPI from "./api";
const UNSPLASH = {
getPhoto(){
    return instanceAPI.get('photos/');
},
getPhotosList(query, page) {
    return instanceAPI.get('search/photos', { params: { query, page, per_page: 50 } });
  },
};
export default UNSPLASH;