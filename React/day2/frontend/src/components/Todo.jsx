

export function Todos({todos}){
    return (
        <>
            {todos.map(function(todo){
                return (
                    <div key={index} style={{padding:10,margin:10,border:"1px solid #03a4ac"}}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed==true?:"completed","not completed"}</button>
                    </div>
                )
            })}
        </>
    )
}   