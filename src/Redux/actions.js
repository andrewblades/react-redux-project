
// the action that makes the field adding possible with the 3 types shown bellow
export const addField = (fieldName, fieldType, conditions) => {
    console.log(fieldName, fieldType, conditions)
    return {
        type: 'ADD_FIELD',
        fieldName,
        fieldType,
        conditions
    }
}

