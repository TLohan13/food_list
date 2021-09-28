import { Component } from "react";
import FoodForm from "./components/foods/FoodForm";
import FoodList from './components/foods/FoodList';


class App extends Component {
  state = {
    foods: [
      { id: 1, item: "bananas", price: 1, complete: false},
      { id: 2, item: "bread", price: 2, complete: false},
      { id: 3, item: "eggs", price: 3, complete: false}
    ]
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (item) => {
    const { foods } = this.state;
    const food = { item, id: this.getUniqId(), complete: false }
    this.setState({ foods: [food, ...foods]});
  }

  handleClick = (id) => {
    const { foods } = this.state;
    this.setState({
      foods: foods.map( f => {
        if (f.id === id) {
          return {
            ...f, complete: !f.complete
          }
        }
        return f
      })
    })
  }

  render () {
    const { foods } = this.state;

    return (
      <div>
        <h1>Food List</h1>
        <hr />
        <FoodForm addItem={this.addItem}/>
        <FoodList name="Food List" items={foods} foodClick={this.handleClick} />
      </div>  
    );
  }
}

export default App;
