import React from 'react';
import logo from './logo.svg';
import "./App.css";


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
        newItem : "",
        list : []
    };
  }

  addItem(toDoValus){
    if(toDoValus !==""){
      const newItem = {
        Id: Date.now(),
        value: toDoValus,
        isDone: false 
      };
      const list = [... this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

deleteItem(Id){
const list = [...this.state.list];
const updateList = list.filter(item => item.Id !==Id);
this.setState({list: updateList});
}

updateInput(input){

  this.setState({newItem: input});
}

  render(){
    return(
    <div>
      <img src={logo} width="100"  height="100" className="logo"/>
      <h1 className="app-title">Loc ToDO App</h1>
      <div className="container">
        Add an itme....
        <br></br>
        <input type="text" className="input-text"
            placeholder="Write a To Di Here"
              required
              value={this.state.newItem}
              onChange={e => this.updateInput(e.target.value)}
             />
        <button className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >add ToDo</button>

        <div className="list">
          <ul>
            {this.state.list.map(item =>{
              return(
                 <li key={item.Id}>
                   <input
                   type="checkbox"
                   name="isDone"
                   checked={item.isDone}
                   onChange={()=> {}}
                   />
                   {item.valuet}

                   <button
                   className="btn"
                   onClick={()=> this.deleteItem(this.Id)}
                   >Delete</button>
                 </li>
              );
            })}
            <li>
              <input type="checkbox" name="" Id=""/>
              Record YouTube Vieos
              <button className="btn">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
}
}

export default App;
