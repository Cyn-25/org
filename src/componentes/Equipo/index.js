import Colaborador from "../Colaborador"
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    //Destructuración
    const { colorPrimario, colorSecundario, titulo, id} = props.datos

    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.4)
    }

    const estiloTitulo = {borderColor: colorPrimario}

    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    value={hexToRgba(colorPrimario, 0.6)}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador) => <Colaborador 
                        datos={colaborador} 
                        key={colaborador.nombre} 
                        colorPrimario = {colorPrimario}
                        eliminarColaborador = {eliminarColaborador}
                        like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo