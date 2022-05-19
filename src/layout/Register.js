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

// const Banner = styled.div`
//  width: 50%;
//  height: 100vh;
//  display: flex;
//  flex-direction: column;
//  justify-content: center;
//  align-items: center;
//  border: solid 1px red;
//  background: ${(props) => props.background ? "url(" + props.background + ") #e5e5e5 " : "" } 20% 90% no-repeat;
//  @media (max-width: 1278px) {
//    background-size: 60%;
//  }
// `; 


// function - só existe a partir desta linha 

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function Register() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  
const handleChange = (event) => {
// Agora estamos usando o reducer  
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
      <h1>Complete os campos ao lado para pedir sua Conta e Cartão de crédito</h1>
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
              <p>Nome Completo</p>
              <input type="text" name="nome" id="nome" required onChange={handleChange}></input>
            </label>
          </fieldset>

          <fieldset>
            <label>
              <p>Celular</p>
              <input type="text" name="celular" id="celular" required onChange={handleChange}></input>
            </label>
          </fieldset>

          <fieldset>
            <label>
              <p>Email</p>
              <input type="email" name="email" id="email" required onChange={handleChange}></input>
            </label>
          </fieldset>

          <fieldset>
            <label>
              <p>Confirmação de Email</p>
              <input type="email" name="confirma_email" id="confirma_email" required onChange={handleChange}></input>
            </label>
          </fieldset>

          <fieldset>
            <label>
              <input type="checkbox" name='aceito_comunicacao' id='aceito_comunicacao' ></input>
              Aceito receber comunicação do Nubank por Whatsapp
            </label>
          </fieldset>

          <fieldset>
            <label>
              <input type="checkbox" name='aceito_contrato' id='aceito_contrato' ></input>
              Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta 
            </label>
          </fieldset>

          <button type="submit">Enviar</button>
        </form>
      </Banner>
    </Container>
  );
}

export default Register;
