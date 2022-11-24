import { useQuery } from '@tanstack/react-query';
import { DefaultGetResponse } from './default-get-response';

const fieldIncludes = [
  'id',
  'title',
  'artist_title',
  'image_id',
  'thumbnail',
  'category_titles'
].join(',');

export interface ApiArtwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  thumbnail: {
    alt_text: string;
  },
  category_titles: string[];
}

export interface Artwork {
  id: number;
  title: string;
  artistTitle: string;
  imageUrl: string;
  imageAltText: string;
  categoryTitles: string[];
}

const getArtworkById = (id: string, size: number): Promise<Artwork> => {
  return fetch(
    `https://api.artic.edu/api/v1/artworks/${id}?${new URLSearchParams({
      fields: fieldIncludes
    })}`
  )
    .then(async (response) => (await response.json()) as DefaultGetResponse<ApiArtwork>)
    .then(({ data, config }) => ({
      id: data.id,
      title: data.title,
      artistTitle: data.artist_title,
      imageUrl: `${config.iiif_url}/${data.image_id}/full/${size},/0/default.png`,
      imageAltText: data.thumbnail.alt_text,
      categoryTitles: data.category_titles
    }));
};

export const useArtworkById = (paintingId: string, size: number = 800) => {
  return useQuery(['artworks', paintingId, size], () => getArtworkById(paintingId, size), {
    staleTime: Infinity
  });
};
