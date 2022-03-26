

export const fetchRandom = (state) => (dispatch) => {

    dispatch({ type: "view-loading" });

    return fetch(`http://localhost:8080/r`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({list: state}) // body data type must match "Content-Type" header
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: "random-result", data: json });
          dispatch({ type: "view-loaded" });
        })
}

 //GET
 export const prueba = (state) => (dispatch) => {

    dispatch({ type: "view-loading" });

    return fetch(`http://localhost:8080/r`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: "crud-get", data: json });
          dispatch({ type: "view-loaded" });
        })

 }

//DELETE
export const borrar = (state) => (dispatch) => {
    dispatch({ type: "crud-delete" });
}
