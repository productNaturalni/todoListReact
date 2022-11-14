export const reducer = (state, action) => {
    switch (action.type) {
    case 'LOAD__PAGE':
        return [...action.list]
    case 'DELETE_ALL':
        return []
    case 'DELETE_LAST':
        return [...action.list]
    case 'ADD':
        return [...state, action.newPost]
    case 'DELETE_POST':
        return [...action.newState]
    case 'COMPLITED':
        return [...action.newState]
    default:
        return state
    }
}