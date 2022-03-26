import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';

const Form = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandom(state));
  };

  //metodo post ->
  return <div class="row">
      <div class="col">
        <form onSubmit={onSubmit}>
          <label htmlFor="list">Ingrese una lista separada por comas:</label>
            <br />
          <div class="input-group">
            <input type="text" class="form-control" id="list" onChange={(e) => setState(e.target.value)} />
            <button type="submit" class="btn btn-info" disabled={props.loading}>
              Batir lista
            </button>
          </div>
        </form>
      </div>
      <div class="col">

      </div>
    </div>
}


const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}


export default connect(stateMapToPros)(Form)
