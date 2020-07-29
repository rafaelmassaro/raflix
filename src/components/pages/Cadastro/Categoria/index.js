import React, { useState } from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../FormField';
import { FormStyle } from './styles';

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
        <FormStyle>
            <h1>Cadastro de Categoria: {values.name}</h1>

            <form onSubmit={function handleSubmit(info){
              info.preventDefault();
              setCategories([...categories, values]);
              setValues(initialValues);
            }}>

              <FormField
                className="text"
                label="Nome da Categoria"
                tag="input"
                type="text"
                name="name" 
                value={values.name}
                onChange={HandleChangeForm}
              />

              <FormField
                label="Descrição"
                tag="textarea"
                type="textarea"
                name="description" 
                value={values.description}
                onChange={HandleChangeForm}
              />

            
              <FormField
                label="Cor da Categoria"
                tag="input"
                type="color"
                name="color"
                value={values.color}
                onChange={HandleChangeForm}
              />
              

              <button className="FormButton">
                Cadastrar
              </button>
            </form>

              <ul>
                {categories.map((category, index) => {
                  return <li key={`${category}${index}`}>{category.name}</li>
                })}
              </ul>

            <Link to="/" className="voltar">
              Ir para a home
            </Link>
            </FormStyle>
      </PageDefault>
    );
  }

  export default CadastroCategoria;