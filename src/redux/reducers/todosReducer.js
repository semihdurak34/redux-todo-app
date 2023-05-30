import actionTypes from "../actions/actionTypes"
const initialState = {
    todos: []
    
}

console.log(initialState)

const todosReducer = (state=initialState, action)=>{
    if(action.type === actionTypes.TODO_ADD){
        return {
            todos:[...state.todos, action.payload],
        }
       
    }
    if(action.type === actionTypes.TODO_DELETE){
        let tempArr = state.todos.filter(item=> item.id !== action.payload)
        return {
            todos: tempArr
        }

    }
    if(action.type === actionTypes.TODO_DONE){
        let tempArry = []
        for(let i =0 ; i <state.todos.length ; i++){
            if(state.todos[i].id === action.payload){
                let currentTodo= {
                    ...state.todos[i], isDone: !state.todos[i].isDone
                }
                tempArry.push(currentTodo)
            } else { 
                tempArry.push(state.todos[i])

            }
        }
        return {
            todos: tempArry
        }

    }
    if(action.type === actionTypes.TODO_UPDATE){
        var tempArry = []
        for(let i=0 ; i<state.todos.length ; i++){
            if(state.todos[i].id === action.payload.id){
                tempArry.push(action.payload)
            }else{
                tempArry.push(state.todos[i])
            }
        
        }
        return {
            todos: tempArry
        }

       
    }

    

    return state
}
export default todosReducer;