import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';


const App = () => {

const [tasks, setTasks ] = useState([
  {id: uuidv4(),  text: 'Walk the dog'},
  {id: uuidv4(),  text: 'Kick the cat'}
])

  const [formValue, setFormValue] = useState('')

  const onValueChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setFormValue(e.target.value)
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log('Requesting a new task!')
    console.log(formValue)
    setTasks([...tasks, {id: uuidv4(), text: formValue}])
    console.log(e);
    setFormValue('')
  }




  return (
    <div className="App">
      <Header />
      <div id="container">

        {
          tasks.map(task => <p key={task.id}>{task.text}</p>)
        }
        <div id="top-menu">
          <form onSubmit={handleSubmit}>
            <label>
              Task Description:
              <input type="text" value={formValue} onChange={onValueChange} />
            </label>
            <input type="submit" value="submit" />
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default App;
