export default function(state = {}, action) {
    console.log('opensourcereducer was called with state', state, 'and action', action);
        // return []

    switch (action.type) {
        default:
            return state;
    }
}
