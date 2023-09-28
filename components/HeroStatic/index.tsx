import React from 'react';
import CustomLink from '../CustomLink';

const HeroStatic = () => {
  return (
    <div>
      <p>
        Merhaba, ben Aytaç Sinan Yaydem <span className="text-xl">🙋🏼‍♂️</span>
      </p>
      <p>
        İstanbul&apos;da yaşayan bir yazılım geliştiriciyim. Şu anda{' '}
        <CustomLink href="https://www.patika.dev" target="_blank" rel="noopener noreferrer">
          Patika.dev&apos;de
        </CustomLink>{' '}
        çalışıyorum.
      </p>
    </div>
  );
};

export default HeroStatic;
