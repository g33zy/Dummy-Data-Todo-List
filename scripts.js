    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
       
        
        
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        const toDos = document.getElementById("todo-list")
            const li = document.getElementById("li")
            const textNode = document.createTextNode(arrayOfTodos[0].userId,)
            toDos.appendChild(li)
            li.innerHTML = arrayOfTodos[0].userId
             for(i = 0; i < populateTodos.length; i++);{
                const toDos = document.getElementById("todo-list")
                    const li = document.getElementById("li")
                    const textNode = document.createTextNode(arrayOfTodos[i].id)
                    toDos.appendChild(li)
                    li.innerHTML = arrayOfTodos[i].id
                    for(i = 0; i < populateTodos.length; i++);{
                        const toDos = document.getElementById("todo-list")
                            const li = document.getElementById("li")
                            const textNode = document.createTextNode(arrayOfTodos[i].title)
                            toDos.appendChild(li)
                            li.innerHTML = arrayOfTodos[i].title
                            for(i = 0; i < populateTodos.length; i++);{
                                const toDos = document.getElementById("todo-list")
                                    const li = document.getElementById("li")
                                    const textNode = document.createTextNode(arrayOfTodos[i].completed)
                                    toDos.appendChild(li)
                                    li.innerHTML = arrayOfTodos[i].completed

                            }
                            }
             }

           
    }

//  document.getElementById("todo-list")
    