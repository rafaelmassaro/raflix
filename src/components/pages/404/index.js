import React from 'react';

import PageDefault from '../../PageDefault';
import { Link } from 'react-router-dom';


function Page404() {
  return (
    <PageDefault>
        <h1>Ops! Página não existe!</h1>

        <Link to="/">
          Voltar para Home
        </Link>
      </PageDefault>
  );
}

export default Page404;
