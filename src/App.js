import React from 'react';
import './style.css';
import {Switch,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
// import Forms from "./Forms"
// import todoData from './todoData';
// import Todoitem from './Todoitem';
// import jokesData from './todoData';
// import Joke from './Joke';
// import vProducts from './jokesData';
// import Product from './Joke';




// class App extends React.Component{ 
//   constructor(){ 
//     super()
//     this.state = { 
//       isLoggedIn : false
//     }
//   }

//   render() { 
    
//     let displayWord;
//     if (this.state.isLoggedIn) { 
//       displayWord = 'in';
//     } else { 
//       displayWord = 'out';
//     }
   
//     return( 
//       <div>
//         <hi>You are currently logged {displayWord}</hi>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//       constructor(){ 
//         super()
//         this.state = { 
//           todo:todoData
//         }
//       }
  
//       render(){ 

//         const todoComponents = this.state.todo.map(item => <Todoitem key={item.id} item={item}/>)
  
//         return( 
//           <div className="todo-item">
//             {todoComponents}
//           </div>
//         )
//         }


//       }
  
  
  
  
  
  // const jokesComponent = jokesData.map(joke => <Joke key= {joke.Id} Question = {joke.Question} Punchline = {joke.Punchline} />)

  
  //       return ( 
  //         <div>
  //           {jokesComponent}
  //         </div>
  //       )
  
  
        
    
// }

// function App() { 

//          const productComponents = vProducts.map(item => { 
//            return(<Product  key={item.id}product={item}/>)
//          })

//          return ( 
//           <div>
//                {productComponents}
//           </div>
//       )
        
//     }

function App() { 
  return( 
    <React.Fragment>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={ProductList}/>
       <Route path="/details" component={Details}/>
       <Route path="/cart" component={Cart}/>
       <Route component={Default}/>
     </Switch>
     <Modal />
     </React.Fragment>

  )

}




export default App;
