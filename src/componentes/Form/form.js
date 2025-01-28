import { useState } from "react";
import Botao from "../Botao/botao";
import CampoTexto from "../CampoTexto/campoTexto";
import ListaSuspensa from "../ListaSuspensa/listaSuspensa";
import "./form.css";

function Form(props) {

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({nome,cargo,imagem,time})
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  };
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          required={true} 
          label="Time" 
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao texto="Criar Card" />
      </form>
    </section>
  );
}

export default Form;
