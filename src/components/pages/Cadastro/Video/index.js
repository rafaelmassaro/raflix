import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';
import useForm from '../../../../hooks/useForm';
import videosRepository from '../../../../respositories/videos';
import categoriesRepository from '../../../../respositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { HandleChangeForm, values } = useForm({
    titulo: 'Vídeo Padrão',
    url: 'https://www.youtube.com/watch?v=rCeGfFk-uCk',
    categoria: 'Frontend',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriasResponse) => {
        setCategorias(categoriasResponse);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line max-len
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={HandleChangeForm}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={HandleChangeForm}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={HandleChangeForm}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
