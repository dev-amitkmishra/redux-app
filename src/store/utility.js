// import actionReducer from "./reducers/result";

export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject, 
        ...updatedValues
    }
}