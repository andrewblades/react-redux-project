
// the initial state
const INITIAL_STATE = {
    fields: []
}

// the main reducer 
export const stateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_FIELD':
            let newField = {
                fieldName: action.fieldName,
                fieldType: action.fieldType,
                conditions: action.conditions
            }
            return {
                fields: [...state.fields, newField]
            }

        default:
            return state;
    }
}