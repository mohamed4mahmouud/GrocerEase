import { createStore } from 'redux';
import rootReducer from './reducers'; // Import your combined reducers

// Load state from session storage if available
const loadState = () => {
    try {
        const serializedState = sessionStorage.getItem('cartState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

// Save state to session storage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('cartState', serializedState);
    } catch (error) {
        
    }
};

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState
);

// Subscribe to store changes and save to session storage
store.subscribe(() => {
    saveState(store.getState());
});

export default store;
