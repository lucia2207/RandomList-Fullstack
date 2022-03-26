import React, { Component } from 'react'
import Form from '../components/Form'
import Result from '../components/Result'

class App extends Component {// component stateful
  render() {

    return (
      <div class="container-fluid">
        <div class="row justify-content-md-center">
          <div class="col-md-auto">
            <h3>Lista Random</h3>
            <p>Sistema Ramdom - Demo</p>
          </div>
        </div>
        <Form />
        <Result />
      </div>
    )
  }
}

export default App


