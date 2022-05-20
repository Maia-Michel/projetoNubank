import { useReducer, useState } from "react";
//import './App.css';
//import logo from '../assets/images/logo.svg';

import styled from "styled-components";
import Banner from "../components/Banner"

//import bannerBG from '../assets/images/bannerBG.png';

const Container = styled.div`
  display: flex;
  fieldset {
    width: 60%;
    border: none;
  } 

`; 


// function - só existe a partir desta linha 

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function Login() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  
const handleChange = (event) => {
  setFormData({
    name: event.target.name,
    value: event.target.value,
  });
};


const handleSubmit = (event) => {
  event.preventDefault();
  
  setSubmitting(true);
  setTimeout(() => {
    setSubmitting(false);
  }, 3000);
};

  return (
    <Container>
      <Banner background={true}>
      <h1>Faça Login</h1>
      </Banner>
      <Banner>  


      {submitting && (
        <div> 
          <p>Enviando o Formulário...</p>
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>: {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}

        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>CPF</p>
              <input type="text" name="cpf" id="cpf" required onChange={handleChange}></input>
            </label>
          </fieldset>
        
          <fieldset>
            <label>
              <p>Senha:</p>
              <input type="password" name="senha" id="senha" required onChange={handleChange}></input>
            </label>
          </fieldset>

          <button type="submit">Entrar</button>
        </form>
      </Banner>
    </Container>
  );
}

export default Login;
