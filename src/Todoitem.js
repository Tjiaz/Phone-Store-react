import React from 'react';

  function Todoitem(props){ 
      return(
          <div className="todo-item"> 
          <input type="checkbox" checked={props.item.completed} />
          <p>{props.item.text}</p>
          </div>
      )
  }


export default Todoitem










// function Joke(props){ 
//          console.log(props)
//         return( 
//              <div>
//                  <h3 style={{display: !props.Question && "none"}}>Question:{props.Question}</h3>
//                  <h3 style={{color: !props.Question && "#888888"}}>Answer:{props.Punchline}</h3>
//              </div>
//          )

// }


// export default Joke

// import React from "react"

// function Product(props){ 
//     console.log(props)
//     return( 
        
//         <div>
//             <h3>{props.product.name}</h3>
//             <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency : "USD"})}
//             - {props.product.description}</p>
        
//         </div>
//     )

// }


// export default Product