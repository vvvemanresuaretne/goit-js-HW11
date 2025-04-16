import axios from "axios";

const API_KEY = "49762011-8c0412d09af011351a5757fc9";

export function getImagesByQuery(query) {
    return axios("https://pixabay.com/api/?", {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 9,
        }
    })
}