import React from 'react';

import Menu from '../../Menu';
import dadosIniciais from '../../../data/dados_iniciais.json';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import Footer from '../../Footer';

function randomBanner(categories) {
  const categoryIndex = Math.floor(Math.random() * categories.length - 0);
  const videoIndex = Math.floor(Math.random() * categories[categoryIndex].videos.length - 0);
  const video = categories[categoryIndex].videos[videoIndex];

  return (
    <BannerMain
      videoTitle={video.titulo}
      url={video.url}
      videoDescription=""
    />
  );
}

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      {randomBanner(dadosIniciais.categorias)}

      {dadosIniciais.categorias.map((categoria) => (
        <Carousel
          key={categoria.cor}
          category={categoria}
        />
      ))}

      <Footer />
    </div>
  );
}

export default Home;
