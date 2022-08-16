import './App.css';
import TitleBar from './components/TitleBar';
import Head from './components/Head'
import Body from './components/Body'
import {useEffect, useRef} from 'react'
import axios from 'axios';
import {settings} from "./constants"
function App() {
 

  let schedule = useRef(JSON.parse(localStorage.getItem("schedule")));
  let currentWeek = useRef();
  useEffect(() => {
    if(localStorage.getItem("groupName") !== settings.groupName) { 
      localStorage.clear();
      localStorage.setItem("groupName",settings.groupName)
    }
    axios.get("https://iis.bsuir.by/api/v1/schedule/current-week").then((res)=>{
      currentWeek.current = res.data;
    }
    );
    axios.get(
    "https://iis.bsuir.by/api/v1/last-update-date/student-group?groupNumber=" + settings.groupName).then(res=>{
       const date = localStorage.getItem("updateDate");
       console.log(date+ ":"+res.data.lastUpdateDate);
       if(date !== res.data.lastUpdateDate){
        localStorage.setItem("updateDate",res.data.lastUpdateDate);
        axios.get("https://iis.bsuir.by/api/v1/schedule?studentGroup=" + settings.groupName).then(res=>{
          const stringData = JSON.stringify(res.data);
          schedule.current = res.data;
          localStorage.setItem("schedule",stringData);
        }) 
        
       }
    }
    )
    
    document.body.style.overflow = "hidden";
   // document.documentElement.style.setProperty('--primary-color', 'blue');
    
  },);
  
  return (
    
      <div className="App">
        <header className="App-header">
          <TitleBar />
          <Head settings={settings}/>
          <div className="divider"/>
          <Body schedule={schedule.current} currentWeek={currentWeek.current}/>
        </header>
      </div>
  );
}

export default App;
