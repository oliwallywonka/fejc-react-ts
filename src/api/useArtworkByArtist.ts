import { useQuery } from "@tanstack/react-query";
import { ArtworkByArtist } from "../components/interfaces/ResponseArtWorks";
import { DefaultGetResponse } from "./default-get-response";

const fieldIncludes = [
  'id',
  'title',
  'artist_id',
  'category_ids',
  'image_id',
  'thumbnail'
].join(',');

const apiBaseUrl = 'https://api.artic.edu';

const getArtworkByArtist = async (artistId: number = 40610): Promise<ArtworkByArtist[]> => {
  return fetch(
    `${apiBaseUrl}/api/v1/artworks/search?${new URLSearchParams({
      fields: fieldIncludes
    })}&query[term][artist_id]=${artistId}&size=20`
  )
    .then(async (response) => (await response.json()) as DefaultGetResponse<ArtworkByArtist[]>)
    .then(({ data }) => {
      const arts: ArtworkByArtist[] = [];
      for (let art of data) {
        arts.push({
          id: art.id,
          title: art.title,
          artist_id: art.artist_id,
          category_ids: art.category_ids,
          image_id: art.image_id,
          thumbnail: art.thumbnail
        });
      }
      return arts;
    }); 
}

export const useArtworkByArtist = () => {
  return useQuery(['artworksByArtist'], () => getArtworkByArtist(),{
    staleTime: Infinity
  });
}