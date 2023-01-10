import { useContext, useEffect } from 'react';
import './App.css';
import { MenuBar } from './components/menuBar';
import image from "./assets/apps/pipMusic.png"
import { Docker } from './components/docker';
import { MainContext,MainContextProvider } from './context/mainContext';
import { Properties } from './components/properties';
import { SplashScreen } from './components/splashScreen';
import { Terminal } from './components/terminal';
function App() {

  
  const {infoOpen,terminalOpen,setTerminalOpen,setInfoOpen,infoItem,setInfonItem,splash,setSplash}=useContext(MainContext)

  useEffect(()=>{
    setTimeout(()=>{
      setSplash(false)
    },5000)

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
    {splash&&<SplashScreen/>}
      
    
    <div className="App">
      
      <div className="Top">
        <MenuBar />

      </div>

      <div className="Desktop">
        {infoOpen&&<Properties setOpen={setInfoOpen} item={infoItem} />}
        {terminalOpen&& <Terminal setOpen={setTerminalOpen} /> }
        <Docker />
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
