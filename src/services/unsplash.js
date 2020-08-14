import axios from "axios";

const accessKey = "b2iwEU82PLNmQQz4O4UabM1rMXE3UHYs-96xHTVfF-0";

const apiEndpoint = "https://api.unsplash.com/";
const randomPhotoEndpoint = `${apiEndpoint}photos/random`;
const listPhotosEndpoint = `${apiEndpoint}photos`;
const searchPhotosEndpoint = `${apiEndpoint}search/photos`;

export const getRandomPhoto = async param => {
  try {
    const res = await axios.get(randomPhotoEndpoint, {
      params: {
        client_id: accessKey,
        count: 1,
        ...param
      }
    });

    return res.status && res.status === 200 ? res.data[0] : null;
  } catch (exc) {
    return null;
  }
};

export const listPhotos = async param => {
  try {
    const res = await axios.get(listPhotosEndpoint, {
      params: {
        client_id: accessKey,
        ...param
      }
    });

    return res.status && res.status === 200 ? res.data : null;
  } catch (exc) {
    return null;
  }
};

export const searchPhotos = async param => {
  try {
    const res = await axios.get(searchPhotosEndpoint, {
      params: {
        client_id: accessKey,
        ...param
      }
    });

    return res.status && res.status === 200 ? res.data.results : null;
  } catch (exc) {
    return null;
  }
};
