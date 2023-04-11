import React from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';

export default function Image({
  alt,
  src,
}: {
  alt: string;
  src: string;
}): JSX.Element {
  return (
    <ProgressiveImage src='large-image.jpg' placeholder='tiny-image.jpg'>
      {(src) => {
        return (
          <div>
            <img className='progressive-image' alt={alt} src={src} />
            <noscript>
              <img
                className='progressive-image no-script'
                src={src}
                alt={alt}
              />
            </noscript>
          </div>
        );
      }}
    </ProgressiveImage>
  );
}
