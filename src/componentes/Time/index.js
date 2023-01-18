import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    // fiz os estilos de dois jeitos como mostrado no vídeo para ter uma anotação
    const css = { backgroundColor: props.corSecundaria}
    return(
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            {props.colaboradores.map(colaborador => <Colaborador/>)}   
        </section>
    )
}

export default Time;