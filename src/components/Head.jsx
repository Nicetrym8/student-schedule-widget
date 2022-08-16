import {Icon} from '@mdi/react'
import {mdiCog} from '@mdi/js'
import {settings, date} from "../constants"

function Head({setSettingsMode,settingsMode}) {
    return ( <div className='logo-container'>
    <div onClick={()=>setSettingsMode(!settingsMode)}>
    <Icon path={mdiCog} size={1.5}/>
    </div>
    
    <div className="info">
        <span>Последнее обновление: {localStorage.getItem("updateDate")} </span>
        <span>Группа: {settings.groupName}</span>
        <span>День: {date.weekdays[date.time.weekday()-1]}</span>
        </div>
    </div> );
}

export default Head;