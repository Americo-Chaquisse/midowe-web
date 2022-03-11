import axios from 'axios';

const apiBaseUrl = 'https://00htxphk78.execute-api.af-south-1.amazonaws.com';

async function httpGet(url: string) {
  const res = await axios.get(`${apiBaseUrl}${url}`);
  return res.data;
}

export { httpGet };
