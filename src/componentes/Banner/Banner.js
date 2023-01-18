import './Banner.css'
function Banner() {
    //JSX é como o react lê e transforma em elementos no dom!
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="Banner principal da página"/>
        </header>  
    );
}

export default Banner