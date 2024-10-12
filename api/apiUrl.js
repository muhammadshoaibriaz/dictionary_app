import axios from "axios";

// const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

// const url = `https://www.dictionaryapi.com/api/v3/references/sd4/json/baseball?key=${"918e2440-9f57-43b4-9b8b-ea41f5c9d80f"}`;
const apiKey = "918e2440-9f57-43b4-9b8b-ea41f5c9d80f";
const dictionaryEndPoint = () =>
  `https://www.dictionaryapi.com/api/v3/references/sd4/json/baseball?${apiKey}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchDictionaryData = () => {
  apiCall(dictionaryEndPoint());
};
