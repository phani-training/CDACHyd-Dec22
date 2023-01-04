//Create a store to contain the App data. 
import { createStore } from 'redux'

//In redux, we use the store to mange and track the data that is changing in the Application. To create a store, we need to import createStore Function from redux. It contains 2 args: Reducer that contain the implementations of the data alterations and other is the initial value of the state that U want to store. 
//A Reducer is a function that defines what needs to be done when a certain action is triggered. It is more like an event handler that U see in HTML pages. Actions are the operations that a component can do. Reducers will define on how to do the operations. We usually write a large switch statement in the function to define what needs to be done for each action. 
const initialValue = 0;
const reducer = (state = initialValue, action)=>{
    console.log("reducer is called");
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}

const store = createStore(reducer); 

store.subscribe(()=>{
    console.log("Current state: ", store.getState());
})
//If U want to send any info or ask for anything from the store, U can do that using dispatch. dspatch is more like a request for an operation. Every dispatch will tell what action it wants to perform on the store. 

//Contents of the Action will be: type: Action Type(const string), payload: the data that U want to send.
store.dispatch({
    type : 'INCREMENT',
    payload : 1
})

store.dispatch({
    type : 'INCREMENT',
    payload : 6
})

store.dispatch({
    type : 'DECREMENT',
    payload : 3
})


