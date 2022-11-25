import { FC } from 'react';
import IconLink from "../IconLink"
import { ArtworkByArtist } from '../interfaces/ResponseArtWorks';

type GridProps = {
	artworks: ArtworkByArtist[]
}

export const GridItems: FC<GridProps> = ({ artworks }) => {
  return(
		<>
			<div className='grid gap-2 grid-cols-2'>
				{artworks.map(art => {
					return <IconLink 
						key={art.id} 
						label={art.title.length > 15? `${art.title.slice(0,15)}...`: art.title} 
						to={`/paintings/${art.id}`} 
						icon={art.image_id}/>
				})}
			</div>
		</>
	)
}