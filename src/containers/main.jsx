import React from "react";
import { Distribution, Box, TextInput, Button, Main, Text } from 'grommet'

// AS CONSTANTS

// const todoList = {
//   todo: '',
//   todos: [],
//   displayToDos: function() {
//     console.log('ToDos: ', this.todos)
//   },
//   addToDos: function(newToDo) {
//     this.todos.push(newToDo);
//     this.displayToDos();
//   },
//   changeToDos: function(indexValue, newToDo) {
//     this.todos[indexValue] = newToDo;
//     this.displayToDos();
//   },
//   deleteToDos: function(indexValue) {
//     this.todos.splice(indexValue, 1);
//     this.displayToDos();
//   },
//   handleWrite: function(event) {
//     console.log(event)
//   }
// };

class main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
      todos: [],
      importance: 5
    };

    this.addToDos = this.addToDos.bind(this);

  }

  displayToDos() {
    console.log('To-do: ' + this.todos)
  }


  addToDos() {
    const updatedList = this.state.todos;
    updatedList.push(this.state.todo);
    this.setState({
      todos: updatedList,
      todo: ""
    });
    console.log(this.state.todos.length);
    console.log(updatedList);
    console.log(this.state.todo);
  }

  changeToDos(indexValue, event) {
    this.todos[indexValue] = event;
  }

  deleteToDos(indexValue) {
    // this.todos.splice(indexValue, 1);
    const key = indexValue;
    const updatedList = this.state.todos;
    updatedList.splice(key, 1);
    this.setState({
      todos: updatedList
    })
  }

  handleWrite(event) {
    // this.state.todo = event;
    // console.log(this.state.todo);
    var textInput = event;
    this.setState({
      todo: textInput
    })
  }

  render() {
    return (
      <div>
        <Box className='submittable'direction='row' border={{ color: 'brand', size: 'large' }} pad='medium'>
          <TextInput placeholder='Insert Task' value={this.state.todo} onChange={(event) => this.handleWrite(event.target.value)} />
          <Button id='form-submit-button' label='Submit' onClick={() => { this.addToDos() }} />
        </Box>
        <Box direction='row' border={{ color: 'brand', size: 'large' }} pad='medium' >
          <Main fill='vertical' flex='grow'>
            <Distribution basis='auto' values={[
              { value: this.state.importance, color: 'light-2' }
            ]}>
              {value => (
                <Box pad="small" background={value.color} fill>
                  {Object.keys(this.state.todos).map(k => {
                    return (
                      <Text id='form-data-text'>
                        <p key={k}>
                          {this.state.todos[k]}
                          <Button label='remove' onClick={() => this.deleteToDos(k)} />
                        </p>
                      </Text>
                    )
                  })}
                </Box>
              )}
            </Distribution>
          </Main>
        </Box>
      </div>
    )
  }
}

export default main;