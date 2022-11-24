export interface ResponseArtWorks {
  data: ArtWork[];
}

export interface ArtWork {
  _score:       number;
  thumbnail:    Thumbnail;
  id:           number;
  category_ids: string[];
  image_id:     string;
  title:        string;
  artist_id:    number;
}

export interface Thumbnail {
  alt_text: string;
  width:    number | null;
  lqip:     string;
  height:   number | null;
}
