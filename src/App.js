import React, { useState } from 'react'
import './App.css';
import List from './components/List/List';
import Popup from './components/Popup/Popup';


function App() {

  //  The condition for adding a new field: on button push the popup appears
  const [addField, setAddField] = useState('false')




  return (
    <div className="App">

      <button onClick={() => setAddField(!addField)}>Add Field?</button>
      {addField ?
        <Popup />
        : null
      } <List />
    </div>
  );
}

export default App;
