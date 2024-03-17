import { useState } from 'react'
import './App.css'
import FaceLogo from './assets/img/FaceLogo.jpg'
import Workimg1 from './assets/img/Work1.png'
import Workimg2 from './assets/img/Work2.png'
import Workimg3 from './assets/img/Work3.jpg'
import Workimg7 from './assets/img/Work7.png'

function App() {
  return (
    <div className="MainBody">
      {/* Head part */}
      <div className="Head">
        <p className="Web HeadComponant">Portfolio</p>
      </div>


      {/* body part */} 
      <div className="Body" >
        {/*Logo part*/}
        <div>
          <img src={FaceLogo} alt="MyFace" className="Web FaceLogo" />
          <p className=" Web TextSideLogo">Hello. <br /> welcome to my <br /> Portfolio Website.</p>
        </div>
        
        {/* made space for nomal form*/}
        <div style={{marginTop: 580}}>  
        </div>
        
        {/* body part */}
        <div className="BuilderWord">
          <p className="BuilderWordText">Word from Builder</p>
          <p className="BuliderForm"> Hello. <br /> My name is Chanapon Chaemkachang. You can call me Safe. <br /> I has graduate in June 2023. I promiss, If I got this job. I will do my Best!!! </p>
        </div>

        <div className="WorkBig">
          <p className="WorkText">Project</p>
            <img src={Workimg1} alt="Workimg1" className='WorkPic' />
            <p className="WorkDetail">This work call "My Mana Ran Out, I'm Going to Shoot Slimes in a Different World"<br /> <br /> I has design the most art in this game. example The balls in the game. my friend want me to design as slime. <br /> for made them cute and look unique. And easliy to look which color was same or not.</p>
            <br />
            <img src={Workimg2} alt="Workimg2" className='WorkPic'/>
            <p className="WorkDetail">This work call "My Mana Ran Out, I'm Going to Shoot Slimes in a Different World2"<br /> <br />In this game. I was draw 2D animation all enemy in the game.<br />the concept was take monster in KONOSUBA series to be Enemy in the game.</p>
            <br />
            <img src={Workimg3} alt="Workimg3" className='WorkPic'/>
            <p className="WorkDetail">This work call "Colour"<br /> <br /> The GAMEJAM 2021 ,the festival of game devoloper to build game in 24 hours. I has join group of devoloper as 2D art designer. <br /> the head of the group need me to do the pic about the sadness ,the emptiness ,but colorful to use the art in the game. <br /> so that why I design this picture look colorful ,not much details and blur in some point of picture </p>
            <br />
            <img src={Workimg7} alt="Workimg7" className='WorkPic'/>
            <p className="WorkDetail">This work call "2 Worlds"<br /> <br /> my final project as studen of KMITL. I and friend try to design. How to made game that player cloud know how to play by use Word less as posible.</p>
            <br />
            <br />
            <br />
        </div>




      </div>

    </div>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
