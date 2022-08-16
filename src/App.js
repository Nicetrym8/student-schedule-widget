import './App.css';
import TitleBar from './components/TitleBar';
import Head from './components/Head'
import Body from './components/Body'
import {useEffect} from 'react'
import {get} from 'axios';

function App() {
  const settings={
    groupName:'150502',
    primaryColor: '#7fffd4',
}
 
  useEffect(() => {
    if(localStorage.getItem("groupName") !== settings.groupName) localStorage.clear();
    get(
    "https://iis.bsuir.by/api/v1/last-update-date/student-group?groupNumber=" + settings.groupName).then(res=>{
       const date = localStorage.getItem("updateDate");
       if(date !== res.data.lastUpdateDate){
        localStorage.setItem("updateDate",res.data.lastUpdateDate);
        get("https://iis.bsuir.by/api/v1/schedule?studentGroup=" + settings.groupName).then(res=>{
          const stringData = JSON.stringify(res.data);
          localStorage.setItem("schedule",stringData);
        }) 
        
       }
    }

    )
    
    document.body.style.overflow = "hidden";
   // document.documentElement.style.setProperty('--primary-color', 'blue');
    
  }, [settings.groupName]);
  const schedule = JSON.parse(localStorage.getItem("schedule"));
  return (
    
      <div className="App">
        <header className="App-header">
          <TitleBar />
          <Head settings={settings}/>
          <div className="divider"/>
          <Body schedule={schedule}/>
        </header>
      </div>
  );
}

export default App;
