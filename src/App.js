import { useContext, useEffect } from 'react';
import './App.css';
import { MenuBar } from './components/menuBar';
import image from "./assets/apps/pipMusic.png"
import { Docker } from './components/docker';
import { MainContext,MainContextProvider } from './context/mainContext';
import { Properties } from './components/properties';
function App() {

  
  const {infoOpen,setInfoOpen,infoItem,setInfonItem}=useContext(MainContext)

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
      {infoOpen&&<Properties setOpen={setInfoOpen} item={infoItem} />}
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

function IndexApp(){
  return(
    <MainContextProvider>
      <App />
    </MainContextProvider>
  )
}

export default IndexApp;
