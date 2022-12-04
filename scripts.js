    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    
    let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autes",
    "completed": false
}]

      
      

    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
        // const user = 1;
        // const completed = false;

        // const filteredToDos = todos.filter(todo => todos.userId === 1 && !todos.completed);
        // console.log(filteredToDos);
            
       
        
        
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
      for (let i = 0; i < arrayOfTodos.length; i++){
        const ol = document.getElementById("todo-list")
        const li = document.createElement("li")
        const text = document.createTextNode(arrayOfTodos[i].title)
        li.appendChild(text)
        ol.appendChild(li)
      }
        // // const toDos = document.getElementById("todo-list")
        // //     const li = document.getElementById("li")
        // //     const textNode = document.createTextNode(arrayOfTodos[0].title,)
        // //     toDos.appendChild(li)
        // //     li.innerHTML = arrayOfTodos[0].title
        // //      for (i = 0; i < populateTodos.length; i++);{
        // //         console.log(populateTodos[i])
        // //         const toDos = document.getElementById("todo-list")
        // //             const li = document.getElementById("li")
        // //             const textNode = document.createTextNode(arrayOfTodos[i].id)
        // //             toDos.appendChild(li)
        // //             li.innerHTML = arrayOfTodos[i].id
                    
                    
        //      }

           
    }


    const filterToDos = () => {
      reset()
      const uData = document.getElementById("userId").value
      const filterArray = arrayOfTodos.filter(todos => todos.userId == uData)
      console.log(filterArray)
      for (let i = 0; i < filterArray.length; i++){
        const ol = document.getElementById("todo-list")
        const li = document.createElement("li")
        const text = document.createTextNode(filterArray[i].title)
        li.appendChild(text)
        ol.appendChild(li)
      }

    }


    const form = document.querySelector("form")
      form.addEventListener("submit", e => {
          e.preventDefault();
      
      ol.innerHTML = ""
      })


      const reset = () => {
        const clear = document.getElementById("todo-list")
        clear.textContent = ""
      }

//  document.getElementById("todo-list")
    