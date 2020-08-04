import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const valoresIniciais = {

    name: '',
    description: '',
    color: '#fc9'

  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const salvarCategoria = () => {
    setCategories([...categories,
      {
        id: 1,
        name: 'roteiro',
        description: 'cursos de roteiro',
        color: '#99e9b9'
      },
      {
        id: 2,
        name: 'fotografia',
        description: 'cursos de fotografia',
        color: '#213990'
      }
    ]);
  };

  function newValue(props) {
    const { name, value } = props.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  useEffect(
    () => {
      if (window.location.href.includes('localhost')) {
        const URL = 'http://localhost:8080/categories';
        fetch(URL) // returns promisse
          .then(async (serverResponse) => {
            if (serverResponse.ok) {
              const response = await serverResponse.json();
              setCategories([...response]);
              return;
            }
            throw new Error('Não foi possível pegar os dados');
          });
      }

      /*
      setTimeout(() => {
        setCategories([
          {
            id: 1,
            name: 'roteiro',
            description: 'cursos de roteiro',
            color: '#cbd1ff'
          },
          {
            id: 2,
            name: 'fotografia',
            description: 'cursos de fotografia',
            color: '#213990'
          }
        ]);
      }, 4000);
    */
    },
    [
      values.name
    ]
  );

  return (
    <PageDefault>

      <h1>
        Cadastro de Categoria:
        {' '}
        {values.name}
      </h1>

      <form onSubmit={

        (event) => {
          event.preventDefault();
          salvarCategoria();
          setValues(valoresIniciais);
        }

      }
      >

        <FormField
          label="Nome da Categoria"
          name="name"
          onChange={newValue}
          type="text"
          value={values.name}
        />

        <FormField
          label="Descrição"
          name="description"
          onChange={newValue}
          type="textarea"
          value={values.description}
        />

        <FormField
          label="Cor"
          name="cor"
          onChange={newValue}
          type="color"
          value={values.color}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      { categories.length === 0 && (
      <div>
        {/** */}
        Loading...
      </div>
      )}

      <ul>
        {categories.map((item) => (
          <li key={`${item.id}`}>
            {item.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>

    </PageDefault>
  );
}

CadastroCategoria.defaultProps = {
  target: '',
};

CadastroCategoria.propTypes = {
  target: PropTypes.string,
};
