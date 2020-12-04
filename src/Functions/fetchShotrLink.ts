export const fetchShortLink = async (url: string) => {
  try {
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    if (await result.ok) {
      return await result.json();
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
