import './campoTexto.css'

function CampoTexto (props) {

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
    <div className='form-group'>
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={props.placeholder}/>
    </div>
    )
}

export default CampoTexto