
import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';

class App extends Component {

   constructor() {
      super();
      this.state = {
         kittens : [],
         searchValue : ""
      }
   }

   componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ kittens: user })); 
   }

   onInputChange = (event) => {
      this.setState({ searchValue : event.target.value });
   }

   render() {

      const { kittens , searchValue } = this.state;

      const filterKittens = kittens.filter( user => {
         return user.name.toLowerCase().includes(searchValue.toLowerCase());
      });

      return !kittens.length ? 
      <h1>Loding...</h1> :
      (
         <div className="main_container">
            <h1>Your Awesome Friends, Kittens!!!</h1>
            <SearchBox inputChange={this.onInputChange} />
            <CardList kittens={filterKittens} />
         </div>
      );
      
   }

}

export default App;