import { useEffect, useState } from 'react';
import './App.css';
import ContactCard from './ContactCard';

function App() {
  // const contacts = [
  //   {
  //     avatarUrl: 'https://via.placeholder.com/150',
  //     name: 'Jenny Han',    
  //     email: 'jenn.han@pukikaki.loh',
  //     age: 25   
  //   },
  //   {
  //     avatarUrl: 'https://via.placeholder.com/150',
  //     name: 'Paul Jones',    
  //     email: 'pjones@pukikaki.loh',
  //     age: 13   
  //   },
  //   {
  //     avatarUrl: 'https://via.placeholder.com/150',
  //     name: 'Rich Broke',    
  //     email: 'brokenr@pukikaki.loh',
  //     age: 22   
  //   },
  // ];

  const [results, setResults] = useState([])
  
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => setResults(data.results));
  },[])
  
  return (
  <>
  {results.map((result, index) => {
    return (
      <ContactCard
      key = {index}
      avatarUrl = {result.picture.large}
      name = {result.first} 
      email = {result.email} 
      age = {result.dob.age}/>  
    )
  })}
  </>
  );
}

export default App;
