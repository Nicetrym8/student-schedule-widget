import './App.css';
import TitleBar from './components/TitleBar';
import Head from './components/Head'
import Body from './components/Body'
import {useEffect, useState} from 'react'
import axios from 'axios';
import Settings from './components/Settings';
import {defaultSettings}from "./constants";


function App() {
  const [currentWeek,setCurrentWeek] = useState(1);
  const [settingsMode,setSettingsMode] = useState(0);
  const [schedule,setSchedule] = useState(JSON.parse(localStorage.getItem("schedule")));
  const [settings, setSettings] = useState(JSON.parse(localStorage.getItem("settings")));
  useEffect(() => {
    if(settings !== null){
      
      document.documentElement.style.setProperty('--primary-color', settings.primaryColor);
      axios.get(
        "https://iis.bsuir.by/api/v1/last-update-date/student-group?groupNumber=" + settings.groupName).then(res=>{
           const date = localStorage.getItem("updateDate");
           axios.get("https://iis.bsuir.by/api/v1/schedule/current-week").then((res)=>setCurrentWeek(()=>{
            localStorage.setItem("currentWeek", res.data);
           return res.data})).catch(()=>{
            setCurrentWeek(localStorage.getItem("currentWeek"));
          });
           if(date !== res.data.lastUpdateDate){
            
            localStorage.setItem("updateDate",res.data.lastUpdateDate);
            axios.get("https://iis.bsuir.by/api/v1/schedule?studentGroup=" + settings.groupName).then(res=>{
                setSchedule(()=>{
                  const stringData = JSON.stringify(res.data);
                  localStorage.setItem("schedule",stringData);
                  return res.data;
                });
            }).catch(()=>
              setSettingsMode(1)
            );
           }
        }
        )
    }
    else {
    
      setSettings(()=>{
        localStorage.setItem("settings",JSON.stringify(defaultSettings)); 
        return defaultSettings;
      });
      setSettingsMode(1);
    }
    document.body.style.overflow = "hidden";
  },[settings]);
  return (
    
      <div className="App reveal">
        <header className="App-header ">
          <TitleBar />
          <Head settings={settings} setSettingsMode={setSettingsMode} settingsMode={settingsMode}/>
          <div className="divider"/>
          {!settingsMode ? <Body settings={settings}  schedule={schedule} currentWeek={currentWeek}/> : <Settings settings={settings} setSettings={setSettings} setSchedule={setSchedule}/>}
        </header>
      </div>
  );
}

export default App;
