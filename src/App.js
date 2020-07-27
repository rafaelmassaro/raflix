import React from 'react';

import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function randomBanner (categories) {
  const categoryIndex = Math.floor(Math.random() * categories.length - 0 )
  const videoIndex = Math.floor(Math.random() * categories[categoryIndex].videos.length - 0)
  const video = categories[categoryIndex].videos[videoIndex]

  return (
    <BannerMain 
      videoTitle={video.titulo}
      url={video.url}
      videoDescription={""}
    />
  )
}

function App() {
  return (
    <div style={{background: "#141414" }}>
      <Menu />

      {randomBanner(dadosIniciais.categorias)}  

      {dadosIniciais.categorias.map(categoria => (
        <Carousel 
          key={categoria.cor}
          category={categoria}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
