const redux = require('redux');
const createStore = redux.createStore ;
const combineReducers = redux.combineReducers;



// console.log("Hello Redux")

const Buy_Pant = 'Buy_Pant';
const Buy_Shirt = 'Buy_Shirt';

// action
function buyPant(){
    return{
        type: Buy_Pant,
        info: "This is the Redux Action"
    }
}

function buyShirt(){
    return{
        type: Buy_Shirt,
        info: "This is the Redux Action" // not necessary
    }
}

// reducer....>> (previousState, action) => newState

const pantInitialState ={
    numOfPants: 20
}

const shirtInitialState={
    numOfShirts: 10

}
// for pant
const pantReducer = (state = pantInitialState, action) =>{
    switch(action.type){
        case Buy_Pant: return{
            ...state,
            numOfPants: state.numOfPants - 1
        }

        default: return state
    }
}

// for shirt
const shirtReducer = (state = shirtInitialState, action) =>{
    switch(action.type){
        case Buy_Shirt: return{
            ...state,
            numOfShirts: state.numOfShirts - 1
        }

        default: return state
    }
}

// now combine above two reducers

const rootReducer = combineReducers({
    pant: pantReducer,
    shirt: shirtReducer 
});

// crate redux store....

const store = createStore(rootReducer);

// access to state
console.log("Initial State: ",store.getState());

// register listener
store.subscribe(()=>console.log("Updated State: ",store.getState()));

//update state
store.dispatch(buyPant())
store.dispatch(buyPant())
store.dispatch(buyPant())
store.dispatch(buyShirt())
store.dispatch(buyShirt())
store.dispatch(buyShirt())

// unsubscribe the registering listener via subscribe
 const unsubscribe = store.subscribe(()=>console.log("Updated State: ",store.getState()));

 unsubscribe();