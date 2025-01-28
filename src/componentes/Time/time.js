import Colaborador from '../Colaborador/colaborador';
import './time.css';

function Time (props) {
    return (
        props.colaboradores.length > 0 &&
        <section 
            className='time' 
            style={{ backgroundColor: props.cor2 }}
            >
            <h3 style={{ borderColor: props.cor }}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        cor={props.cor}
                        key={colaborador.nome}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                        time={colaborador.time}
                    />
                )}
            </div>
        </section>
    )
}

export default Time