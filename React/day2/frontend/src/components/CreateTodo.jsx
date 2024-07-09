export function CreateTodo(props) {
    return (
        <>
            <input style={{padding:10,margin:10}} type="text" placeholder="title"></input>
            <input style={{padding:10,margin:10}}  type="text" placeholder="description"></input>
            <button style={{padding:10,margin:10,color:"#03a4ac"}} onClick={()=>{
                fetch("https://localhost/3000/todos",{
                    method:"POST",
                    body:JSON.stringify({
                        title:"title",
                        description:"description"
                    }).then(async function(response){
                        const json = await response.json();
                        alert("todo added bc");
                    })
                )
        }>Add a todo</button>
        </>
    )
}