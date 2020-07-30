import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';

function CadastroCategoria() {
  const [categories, setCategories] = useState([]);

  const initialValues = {
    name: '',
    description: '',
    color: '#000',
  };

  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function HandleChangeForm(info) {
    setValue(info.target.getAttribute('name'), info.target.value);
  }

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias';

    fetch(URL_TOP)
      .then(async (response) => {
        const jsonResponse = await response.json();
        setCategories([
          ...jsonResponse,
        ]);
      });

    // setTimeout(() => {
    //   setCategories([
    //     ...categories,
    //     {
    //       id: 1,
    //       nome: 'Frontend',
    //       descrition: 'Categoria show',
    //       cor: '#6BD1FF',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Backend',
    //       descrition: 'Categoria show',
    //       cor: '#6BF31FF',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();
        setCategories([...categories, values]);
        setValues(initialValues);
      }}
      >

        <FormField
          className="text"
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={HandleChangeForm}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={HandleChangeForm}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={HandleChangeForm}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => <li key={`${category.nome}`}>{category.name}</li>)}
      </ul>

      <Link to="/" className="voltar">
        Ir para a home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
