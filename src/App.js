import { useEffect } from 'react';
import './App.css';
import { MenuBar } from './components/menuBar';
import image from "./assets/apps/pipMusic.png"
import { Docker } from './components/docker';
function App() {
  useEffect(()=>{

  },[])
  const apps=[
    {
      name:"Calculadora Nutriinterativa",
      icon:image
    },
    {
      name:"Jupiter Light Novel",
      icon:image
    },
  ]
  return (
    <>
      <Docker />
    
    <div className="App">
      
      <div className="Top">
        <MenuBar />

      </div>

      <div className="Desktop">
        <div className='app1'>
          

        </div>
        <div className='app2'>
          
        </div>
        
      </div>
    </div>
    </>
  );
}

export default App;
