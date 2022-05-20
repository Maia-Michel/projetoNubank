import styled from "styled-components";
import Banner from "../components/Banner"
import ExtractData from "../components/ExtractData";
import boleto from '../assets/images/boleto.svg';
import pix from '../assets/images/pix.svg';
import ted from '../assets/images/ted.svg';


const Container = styled.div`
  display: flex;
  fieldset {
    width: 60%;
    border: none;
  } 
`; 

const Ul = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;

`;

const Li = styled.li`
  width: 100%;
  display: flex;
  line-height: 100px;
  justify-content: space-between;
`;

function Extract() {

const img = (icone)=>{
    let retorno = ted;
  switch (icone) {
    case "boleto": retorno = boleto;
    break;
    case "ted": retorno = ted;
    break;
    default:
    retorno = pix;

  }
  return retorno;
};

  return (
    <Container>
      <Banner background={true}>
      <h1>Confira seu extrato</h1>
      </Banner>

      <Banner>  
        <Ul>
          {ExtractData.map((item, index)=>(
            <Li key={index}>
              <div><img src={ img(item.icone)} alt="operação"></img> </div>
              <div><strong> {item.operacao}</strong>
              {item.destinatario && <span>{item.destinatario} </span>}
                <span>{item.valor}</span>
              </div>
              <div>{item.dataOperacao}</div>
            </Li>
          ))}
        </Ul>

      </Banner>
    </Container>
  );
}

export default Extract;
