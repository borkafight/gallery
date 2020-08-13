import axios from "axios";

const accessKey = "T4NsvArEQlho301YEwpO7aHFJjy4PopQMeYbzLaKahs";

const apiEndpoint = "https://api.unsplash.com/";
const randomPhotoEndpoint = `${apiEndpoint}photos/random`;

export const getRandomPhoto = async param => {
  try {
    const res = await axios.get(randomPhotoEndpoint, {
      params: {
        client_id: accessKey,
        count: 1,
        ...param
      }
    });

    if (res.status == 200) return res.data[0];
    else return null;
  } catch (exc) {
    console.error(exc);
    return null;
  }
};
