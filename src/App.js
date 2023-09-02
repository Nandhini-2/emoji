import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import emojipedia from './emoji';

function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  function handleSearch(event){
    setSearchText(event.target.value)
  }

  useEffect(() => {
    const newData = emojipedia.filter(emoji => emoji.keywords.toLowerCase().includes(searchText.toLowerCase()));
    setData(newData)
},[searchText])

  return (
    <div className="App">
      <Header className=""/>
    <div className="input-wrapper">
      <input
       className='seach-box'
        type="text"
        onChange={handleSearch}
        value={searchText}
        placeholder="Search here "
      />
    </div>
    <div className='dictionary'>
     <div>{data.map(emojipedia => emojipedia.symbol)}</div> 
    </div>


  </div>
);
};
 

export default App;
