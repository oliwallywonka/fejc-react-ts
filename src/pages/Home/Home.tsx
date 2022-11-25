import { FC } from 'react';
import { useArtworkByArtist } from '../../api/useArtworkByArtist';
import { useCategoryByIds } from '../../api/useCategoriesByIds';
import Accordion from '../../components/Accordion';
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
          <div></div>
          {categoriesQuery.data.map(category => (
            
            <Accordion 
              key={category.id} 
              title={category.title} 
              icon={
                <IconPainting 
                  imageId={artworkFilteredByCategory(category.id)[0].image_id}/>
              }
              expanded={true}>
                <div className='grid gap-2 grid-cols-2'>
                  {artworkFilteredByCategory(category.id).map(art => {
                    return <IconLink 
                      key={art.id} 
                      label={art.title.length > 15? `${art.title.slice(0,15)}...`: art.title} 
                      to={`/paintings/${art.id}`} 
                      icon={art.image_id}/>
                  })}
                </div>
            </Accordion>
          ))}
          
        </div>
      )}
    </>
  );
};
