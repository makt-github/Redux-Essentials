const redux = require('redux');
const createStore = redux.createStore ;


// console.log("Hello Redux")

const Buy_Cloth = 'Buy_Cloth'

// action
function buyCloth(){
    return{
        type: Buy_Cloth,
        info: "This is the Redux Action"
    }
}

// reducer....>> (previousState, action) => newState

const initialState ={
    numOfPants: 20

}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case Buy_Cloth: return{
            ...state,
            numOfPants: state.numOfPants - 1
        }

        default: return state
    }
}

// crate redux store....

const store = createStore(reducer);

// access to state
console.log("Initial State: ",store.getState());

// register listener
store.subscribe(()=>console.log("Updated State: ",store.getState()));

//update state
store.dispatch(buyCloth())
store.dispatch(buyCloth())
store.dispatch(buyCloth())
store.dispatch(buyCloth())
store.dispatch(buyCloth())

// unsubscribe the registering listener via subscribe
 const unsubscribe = store.subscribe(()=>console.log("Updated State: ",store.getState()));

 unsubscribe();
