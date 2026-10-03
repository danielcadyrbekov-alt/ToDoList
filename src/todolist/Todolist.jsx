import React, { useState } from 'react';


const Todolist = () => {
    const [inputValue, SetInputName] = useState("");
     const [todo, Settodo] = useState([]);

     [
      {
        id : 1,
        name: inputValue
      },
    
    {
        id : 2,
        name: inputValue
      },
  {
        id : 3,
        name: inputValue
      },
  {
        id : 4,
        name: inputValue
      },

     ]      
     


     function addtodo() {
        let newProduct = {
            id : 1,
            name : inputValue,
        }
        let res = [...todo, newProduct ]
        Settodo(res);
       SetInputName('')
        localStorage.setItem('product', JSON.stringify(res))
     }
    
    return (
        <div>
           <input type='text' value={inputValue} onChange={(e) => SetInputName(e.target.value)
           } />
           <button onClick={() => addtodo()}>+</button>
           <div>
            {todo.map((el) => 
            (<>
           <h1>{el.name}</h1>
            </>)
            )}
           </div>     

        </div>

    );
};

export default Todolist;