import { FC, useState } from 'react';
import { useArtworkByArtist } from '../../api/useArtworkByArtist';
import { useCategoryByIds } from '../../api/useCategoriesByIds';
import Accordion from '../../components/Accordion';
import { GridItems } from '../../components/GridItems/GridItems';
import IconLink from '../../components/IconLink';
import { IconPainting } from '../../components/IconPainting/IconPainting';
import { ArtworkByArtist } from '../../components/interfaces/ResponseArtWorks';

export const Home: FC = () => {
  const artworkQuery = useArtworkByArtist();
  const categoriesId = new Set<string>();
  artworkQuery.data?.forEach(art => {
    art.category_ids.forEach(id => {
      categoriesId.add(id);
    })
  })
  const categoriesIdParsed = Array.from(categoriesId).join(',');
  const categoriesQuery = useCategoryByIds(categoriesIdParsed);

  const artworkFilteredByCategory = (categoryId: string) => {
    const artworks: ArtworkByArtist[] = [] ;
    artworkQuery.data?.map(art => {
      if (art.category_ids.includes(categoryId)) {
        artworks.push(art);
      }
    });
    return artworks;
  }

  return (
    <>
      {(artworkQuery.isLoading || categoriesQuery.isLoading) && <div>...Loading</div>}
      {(artworkQuery.error || categoriesQuery.error) && <div> Failed to get data </div>}
      {artworkQuery.data && categoriesQuery.data &&(
        <div className="page">
          <h2 className="title-2">
            Mr. Van G
          </h2>
          {categoriesQuery.data.map(category => {
            
            return (
              <Accordion 
                key={category.id} 
                title={category.title} 
                icon={
                  <IconPainting 
                    imageId={artworkFilteredByCategory(category.id)[0].image_id}/>
                }>
                  <GridItems artworks={artworkFilteredByCategory(category.id)} />
              </Accordion>
            )
          })}
        </div>
      )}
    </>
  );
};
