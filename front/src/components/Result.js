import React, { useState } from 'react'
import { connect } from 'react-redux';
import { prueba, borrar } from '../actions';

const Result = (props) => {
    const [state] = useState();

    const onDelete = (id) => {
        console.log("Borrando");
        fetch(`http://localhost:8080/r/${ id }`, {
            method: 'DELETE'
        }).then(() => props.dispatch(borrar(state)));
      };

    props.dispatch(prueba(state));

    return <div class="row">
        <div class="col">
            <div class="row">
                <div class="col">
                    {props.result && <h3>Lista batida: {props.result}</h3> }
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h3>Listas anteriores</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Lista original</th>
                                <th>Lista batida</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.lista.map(function (elemento) {
                                return <tr key={elemento.id}>
                                    <td>{ elemento.orginalList }</td>
                                    <td>{ elemento.randomList }</td>
                                    <td><button class="btn btn-danger" onClick={ () => {
                                        onDelete(elemento.id);
                                     }}>Borrar</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}


const stateMapToPros = state => {
    console.log("El estado", state);

    return {
        result: state.random.result?.randomList,
        lista: state.crud.lista
    }
}

export default connect(stateMapToPros)(Result)
