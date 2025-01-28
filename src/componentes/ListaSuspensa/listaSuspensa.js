import './listaSuspensa.css'

function ListaSuspensa (props) {
    return (
        <div className='form-group'>
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.required} 
                value={props.valor}
            >
                <option value='' disabled selected>Selecione</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa