import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { BrowserRouter,
         Switch,
         Route 
        } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';

import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";
import Home from "./pages/Home";

const Page404 = () => {

  return (

    <div>
      Não encontrado
    </div>

  )

}


ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  /*
  <React.StrictMode>
  </React.StrictMode>,
  */
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
