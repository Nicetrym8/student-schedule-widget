import './App.css';
import TitleBar from './components/TitleBar';
import Head from './components/Head'
import Body from './components/Body'
import {useEffect, useState} from 'react'
import axios from 'axios';
import {settings} from "./constants"
import Settings from './components/Settings';
function App() {
 
  const [currentWeek,setCurrentWeek] = useState();
  const [schedule,setSchedule] = useState(JSON.parse(localStorage.getItem("schedule")));
  const [settingsMode,setSettingsMode] = useState(0);

  useEffect(() => {
    if(localStorage.getItem("groupName") !== settings.groupName) { 
      localStorage.removeItem("updateDate");
      localStorage.setItem("groupName",settings.groupName)
    }
 
    axios.get(
    "https://iis.bsuir.by/api/v1/last-update-date/student-group?groupNumber=" + settings.groupName).then(res=>{
       const date = localStorage.getItem("updateDate");
       console.log(date !== res.data.lastUpdateDate);
       axios.get("https://iis.bsuir.by/api/v1/schedule/current-week").then((res)=>{
        localStorage.setItem("currentWeek", res.data);
        setCurrentWeek(res.data);
      }).catch(()=>{
        setCurrentWeek(localStorage.getItem("currentWeek"));
      });
       if(date !== res.data.lastUpdateDate){
        
        localStorage.setItem("updateDate",res.data.lastUpdateDate);
        axios.get("https://iis.bsuir.by/api/v1/schedule?studentGroup=" + settings.groupName).then(res=>{
          setSchedule(res.data);
          const stringData = JSON.stringify(res.data);
          localStorage.setItem("schedule",stringData);
        }).catch(()=>
          setSettingsMode(1)
        );
       }
    }
    )
    
    document.body.style.overflow = "hidden";
   // document.documentElement.style.setProperty('--primary-color', 'blue');
    
  },[schedule]);
  
  return (
    
      <div className="App">
        <header className="App-header">
          <TitleBar />
          <Head settings={settings} setSettingsMode={setSettingsMode} settingsMode={settingsMode}/>
          <div className="divider"/>
            {settingsMode ? <Body schedule={schedule} currentWeek={currentWeek}/> : <Settings/>}
        </header>
      </div>
  );
}

export default App;
