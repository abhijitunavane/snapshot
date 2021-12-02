import { api_key } from "./config.js";
import axios from "axios";

export const get_photos = async (query) => {
    const photos_json = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    );

    return photos_json.data.photos.photo;
}