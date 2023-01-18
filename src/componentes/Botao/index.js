import './Botao.css'

const Botao = (props) => {
    return(<button className='botao'>
        {props.texto /* se precisar criar esse compotente com icones e texto usar .children */}
    </button>
    )
}

export default Botao;