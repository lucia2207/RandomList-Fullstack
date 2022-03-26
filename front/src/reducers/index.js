//reducers
import { combineReducers } from 'redux'


function view(state = {
    loading: false
}, action) {
    switch (action.type) {
        //TODO: refactorizar
        case "view-loading": {
            return {
                loading: true
            }
        }
        case "view-loaded": {
            return {
                loading: false
            }
        }
        default: return state
    }
}

function random(state = {
    result: {}
}, action) {
    switch (action.type) {
        case "random-result": {
            return { result: action.data }
        }
        default: return state
    }
}

function crud(state = {
    lista: []
}, action) {
    switch (action.type)
    {
        case "crud-get": {
            // Devuelvo los datos tal como los recibo
            console.log("GET", action.data);
            return { lista: action.data }
        }
        case "crud-post": {
            
        }
        case "crud-delete": {
            console.log("DELETE", action);
            return state;
        }
        
        default: return state
    }
}


const rootReducer = combineReducers({
    view, random, crud
})

export default rootReducer