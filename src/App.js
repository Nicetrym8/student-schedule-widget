import './App.css';
import TitleBar from './components/TitleBar';
import Head from './components/Head'
function App() {
  return (
    
      <div className="App">
        <header className="App-header">
          <TitleBar />
          <Head/>
          <div className="divider"/>
          <div>
            <ul>
            <li>ОАИП(ЛК) 9:00-10:35</li>
            <li>ОАИП(ЛК) 9:00-10:35</li>
            <li>ОАИП(ЛК) 9:00-10:35</li>
            <li>ОАИП(ЛК) 9:00-10:35</li>
            <li>ОАИП(ЛК) 9:00-10:35</li>
            </ul>
             
          </div>
        </header>
      </div>
  );
}

export default App;
