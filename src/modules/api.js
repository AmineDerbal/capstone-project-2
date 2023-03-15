const baseUrl =
  "https://api.thedogapi.com/v1/images/search?format=json&order=ASC&limit=10";
const involveUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const involveId = "SGBNwoFbgJ2ty7olqkAP";

export const getApiItems = async () => {
  const dataStream = await fetch(baseUrl, {
    headers: {
      "x-api-key":
        "live_CcSfcJy9YCjnG2GgcCo196zIno3Kj7xVxdfu7lIGZGVZrdTQWqlE9UcCqX1JW7XY",
    },
  });
  const dataResponse = await dataStream.json();
  return dataResponse;
};

export const getApiComments = async (index) => {
  const dataStream = await fetch(
    `${involveUrl}${involveId}/comments?item_id=${index}`
  );
  const dataResponse = await dataStream.json();
  return dataResponse;
};

export const getAllLikesData = async () => {
  const dataStream = await fetch(`${involveUrl}${involveId}/likes/`);
  const dataResponse = await dataStream.json();
  return dataResponse;
};

export const sendALike = async (index) => {
  const dataStream = await fetch(`${involveUrl}${involveId}/likes/`, {
    method: "POST",
    headers: {
      "content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      item_id: index,
    }),
  });
  return dataStream;
};

export default { getApiItems, sendALike, getAllLikesData, getApiComments };
