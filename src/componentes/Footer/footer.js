import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className='redes'>
                <img src="/imagens/fb.png" alt="footer"></img>
                <img src="/imagens/tw.png" alt="footer"></img>
                <img src="/imagens/ig.png" alt="footer"></img>
            </div>
            <div className='logo'>
                <img src="/imagens/logo.png" alt="footer"></img>
            </div>
            <div className='alura'>
                <h3>Desenvolvido por Alura.</h3>
            </div>
        </footer>
    )
}

export default Footer