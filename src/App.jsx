import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Button, Output } from './components.jsx';
import { getNameInfo } from './api.jsx';

function App() {
  const [output, setOutput] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const inputValue = e.target[0].value.trim();
    if (inputValue === '') return;
    const userName = inputValue[0].toUpperCase() + inputValue.slice(1);
    const resultNameInfo = userName.length < 2 ? 'Enter correct name' : await getNameInfo(userName)
    setOutput(resultNameInfo);
    e.target.reset();
  }
  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Guess Gender</h1>
        <Input />
        <Button />
        <Output resultNameInfo={output} />
      </form>
    </div>
  );
}

export default App;
