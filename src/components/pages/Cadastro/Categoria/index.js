import React, { useState } from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../FormField';

function CadastroCategoria(){

    const [categories, setCategories] = useState([]);

    const initialValues = {
      name: '',
      description: '',
      color: '#000'
    };

    const [values, setValues] = useState(initialValues);

    function setValue(key, value){
      setValues({
        ...values, 
        [key]: value,
      })
    }

    function HandleChangeForm(info){
      setValue(info.target.getAttribute('name'), info.target.value)
    }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.name}</h1>

        <form onSubmit={function handleSubmit(info){
          info.preventDefault();
          setCategories([...categories, values]);
          setValues(initialValues);
        }}>

          <FormField
            label="Nome da Categoria"
            type="input"
            name="name" 
            value={values.name}
            onChange={HandleChangeForm}
          />

          <div>
            <label>
              Descrição:
              <textarea
                type="text"
                name="description"
                value={values.description}
                onChange={HandleChangeForm}
              />
            </label>
          </div>

          <FormField
            label="Cor da Categoria"
            type="color"
            name="color"
            value={values.color}
            onChange={HandleChangeForm}
          />
          

          <button>
            Cadastrar
          </button>
        </form>

          <ul>
            {categories.map((category, index) => {
              return <li key={`${category}${index}`}>{category.name}</li>
            })}
          </ul>

        <Link to="/">
          Ir para a home
        </Link>
      </PageDefault>
    );
  }

  export default CadastroCategoria;