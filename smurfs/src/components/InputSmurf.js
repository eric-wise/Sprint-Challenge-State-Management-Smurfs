import React, { useState } from 'react';

const InputSmurfs = ({ addSmurf, error }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addSmurf({
      name,
      age,
      height
    });
    setName('');
    setAge('');
    setHeight('');
  };

  return (
    <div >
      <form onSubmit={onSubmit} >
        <label htmlFor="name" > Name: </label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="age">Age:</label>
        <input type="text" value={age} onChange={e => setAge(e.target.value)} />
        <label htmlFor="height" >Height:</label>
        <input type="text" value={height} onChange={e => setHeight(e.target.value)} />
        <button type="submit">Create New Smurf</button>
      </form>      
    </div>
  );
};

export default InputSmurfs;