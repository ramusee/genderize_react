import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Button, Output } from './components.jsx';
import { sendRequest } from './request.jsx';

function App() {
  const [resultOutput, setOutput] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const inputValue = e.target[0].value.trim();
    if (inputValue === '') return;
    const userName = inputValue[0].toUpperCase() + inputValue.slice(1);
    const resultUserInfo = userName.length < 2 ? 'Enter correct name' : await sendRequest(userName)
    setOutput(resultUserInfo);
    e.target.reset();
  }
  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Guess Gender</h1>
        <Input />
        <Button />
        <Output resultUserInfo={resultOutput} />
      </form>
    </div>
  );
}

export default App;
