const apiBaseUrl = 'https://api.artic.edu'

export const getArtworksByArtists = async (artistId: number = 40610) => {
  const response: any = await fetch(
    `${apiBaseUrl}/api/v1/artworks/search?fields=id,title,artist_id,category_ids,image_id,thumbnail&query[term][artist_id]=${artistId}&size=20`
  );
  return await response.json();
}

export const getCategoriesById = async (ids: string) => {
  const response: any = await fetch(
    `${apiBaseUrl}/api/v1/category-terms?ids=${ids}`
  );
  return await response.json();
}

export const getImageUrl = async (imageId: string) => {
  const response: any = await fetch(
    `${apiBaseUrl}/iiif/2/${imageId}/full/300,/0/default.png`
  );
  return response;
}


const formatIds = (ids: string []) => {
  let accumulator: string = '';
  for (let i = 0; i < ids.length; i++ ) {
    if (i === ids.length) accumulator += ids[i];
    accumulator += ids[i] +',';
  }
  return accumulator;
}