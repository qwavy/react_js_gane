import './App.css';

import { useState } from 'react'
// import {classNames} from 'react'
function App() {
  
  const enemy = document.querySelector('.enemy')
  const [isActive, setIsActive] = useState(false)

  const click = () => {


    if (document.querySelector('.character').classList == 'character') {
      document.querySelector('.character').classList.add('jumping-character')
      console.log(document.querySelector('.character'))

    } 
    setTimeout(() => {
      document.querySelector('.character').classList.remove('jumping-character')
    }, 1000);
  }

    setInterval(() => { 



    if (parseFloat(getComputedStyle(document.querySelector('.enemy')).getPropertyValue('left')) >= 0 && parseFloat(getComputedStyle(document.querySelector('.enemy')).getPropertyValue('left')) < 20 && parseFloat(getComputedStyle(document.querySelector('.character')).getPropertyValue('top')) > 118) { 

    alert('You lost!'); 
    } 
    }, 100)

    return (
      <div className='container' onClick={click}>
        {/* <div className='character' className={isActive ? 'character' : 'jumping-character'}></div> */}
        <div className='character'></div>
        <div className='enemy'></div>
      </div>
    )
  }

  export default App;
