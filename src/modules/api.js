const url = 'https://api.thedogapi.com/v1/images/search?format=json&order=ASC&limit=10';

export const getApiItems = async () => {
  const dataStream = await fetch(url, {
    headers: {
      'x-api-key': 'live_CcSfcJy9YCjnG2GgcCo196zIno3Kj7xVxdfu7lIGZGVZrdTQWqlE9UcCqX1JW7XY',
    },
  });
  const dataResponse = await dataStream.json();
  return dataResponse;
};
export default getApiItems;
