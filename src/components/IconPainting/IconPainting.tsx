import { FC } from "react";

type ImageIconProps = {
  imageId?: string;
  width?: number;
}

export const IconPainting: FC<ImageIconProps> = ({ 
  imageId = '25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e', 
  width = 300
})  => {
  return(
    <>
      <img 
        className="w-10 h-10 rounded-full" 
        src={`https://www.artic.edu/iiif/2/${imageId}/full/${width},/0/default.png`} 
        alt="Rounded avatar"/>

    </>
  );
}