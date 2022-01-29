import React, { Component } from 'react';
import axios from 'axios';

 class App extends Component {
   state={
      loading: true,
      todos:[],
      errors:null
   }
   componentDidMount() {
    
     axios.get("https://jsonplaceholder.typicode.com/todos").then(res =>{
      this.setState({todos:res.data
      ,loading: false});
     })
     .catch(error => this.setState({errors:error.message}));
     
   }

  render() {
    return (
      <>
             {this.state.loading?"loading":""}
             {this.state.todos.length>0?this.state.todos.map(
               element=>{
                 return <div key={element.id}>
                   {
                      element.id
                   }
                   {
                    element.title
                    }
                    {
                      element.completed
                    }
                    <hr></hr>
                 </div>;
               }
             ):""}
      </>
    )
  }
}
export default App
