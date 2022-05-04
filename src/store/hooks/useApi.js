const useApi = () => {
  const getAlbumData = async (tag) => {
    const apiKey = `93016a5645881e6988acd0603a11dd31`;
    const responseAlbums = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${tag}&api_key=${apiKey}&limit=10&format=json`
    );
    const responseAlbumsJson = await responseAlbums.json();
    const filteredAlbums = responseAlbumsJson.albums.album.filter(
      (albumToCheck) => albumToCheck.mbid !== ""
    );
    const albumList = await Promise.all(
      filteredAlbums.map(async (albumId) => {
        const responseAlbum = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&mbid=${albumId.mbid}&format=json`
        );
        return responseAlbum.json();
      })
    );
    return albumList;
  };
  return { getAlbumData };
};

export default useApi;
