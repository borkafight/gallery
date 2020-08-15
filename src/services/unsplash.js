import axios from "axios";

const accessKey = "4v3WSECD0l2Bi3bWdK2BtDSyUSCVxHRhTY_QAueTy24";

const apiEndpoint = "https://api.unsplash.com/";
const randomPhotoEndpoint = `${apiEndpoint}photos/random`;
const listPhotosEndpoint = `${apiEndpoint}photos`;
const searchPhotosEndpoint = `${apiEndpoint}search/photos`;
const getUserEndpoint = `${apiEndpoint}users`;

// Random Photo
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

// List Photos
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

// Search Photos
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

// Get Photo
export const getPhoto = async param => {
  try {
    const res = await axios.get(`${listPhotosEndpoint}/${param.id}`, {
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

// Get User
export const getUser = async param => {
  try {
    const res = await axios.get(`${getUserEndpoint}/${param.username}`, {
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
