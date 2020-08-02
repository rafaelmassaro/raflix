import React, { useEffect, useState } from 'react';

import PageDefault from '../../PageDefault';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import categoriesRepositories from '../../../respositories/categories';

// function randomBanner(categories) {
//   const categoryIndex = Math.floor(Math.random() * categories.length - 0);
//   const videoIndex = Math.floor(Math.random() * categories[categoryIndex].videos.length - 0);
//   const video = categories[categoryIndex].videos[videoIndex];

//   return (
//     <BannerMain
//       videoTitle={video.titulo}
//       url={video.url}
//       videoDescription=""
//     />
//   );
// }

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepositories.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setDadosIniciais(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* {randomBanner(dadosIniciais.categorias)}

      {dadosIniciais.categorias.map((categoria) => (
        <Carousel
          key={categoria.cor}
          category={categoria}
        />
      ))} */}

    </PageDefault>
  );
}

export default Home;
