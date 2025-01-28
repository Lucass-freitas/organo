import { useState } from 'react';
import Banner from './componentes/Banner/banner.js';
import Form from './componentes/Form/form.js';
import Time from './componentes/Time/time.js';
import Footer from './componentes/Footer/footer.js';

function App() {
  const times = [
    { codigo: 0, descri: "Programação", cor: "#57c278", cor2: "#d9f7e9" },
    { codigo: 1, descri: "Front-End", cor: "#82cffa", cor2: "#e8f8ff" },
    { codigo: 2, descri: "Data Science", cor: "#a6d157", cor2: "#f0f8e2" },
    { codigo: 3, descri: "Dev-Ops", cor: "#e06b69", cor2: "#fde7e8" },
    { codigo: 4, descri: "UX e Desing", cor: "#db6ebf", cor2: "#fae9f5" },
    { codigo: 5, descri: "Mobile", cor: "#ffba05", cor2: "#fff5d9" },
    { codigo: 6, descri: "Inovação e Tecnologia", cor: "#ff8a29", cor2: "#ffeedf" },
  ];

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdd = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Form times={times.map(time => time.descri)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)}/>
      {times.map(time => 
        <Time 
          key={time.codigo} 
          nome={time.descri} 
          cor={time.cor} 
          cor2={time.cor2}
          colaboradores={colaboradores.filter(e => e.time === time.descri)}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
