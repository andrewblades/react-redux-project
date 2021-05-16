import React, { useState } from 'react'
import './Sass/App.css';
import List from './components/List/List';
import Popup from './components/Popup/Popup';


function App() {

  //  The condition for adding a new field: on button push the popup appears
  const [addField, setAddField] = useState('false')




  return (
    <div className="App">
      <div className='bigContainer'>
        <button className='addBtn' onClick={() => setAddField(!addField)}>Add Field?</button>
        {addField ?
          <Popup />
          : null
        } <List />
      </div>
    </div>
  );
}

export default App;
