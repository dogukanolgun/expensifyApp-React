import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy // incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ set } = {}) => ({
    type: 'SET',
    set
});

const resetCount = () => ({
    type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
			return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
			};
		case 'SET':
			return {
				count: action.set
			};
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

// We used a reducer to make it simple
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// unsubscribe();

store.dispatch(resetCount());

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ set: 101 }));

// store.dispatch({
// 	type: 'SET',
// 	count: 101
// });
