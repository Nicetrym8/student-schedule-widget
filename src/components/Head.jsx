import {Icon} from '@mdi/react'
import {mdiCog} from '@mdi/js'
import {settings, date} from "../constants"

function Head() {
    return ( <div className='logo-container'>
    <Icon path={mdiCog} size={1.5}/>
    <div className="info">
        <span>Последнее обновление: {localStorage.getItem("updateDate")} </span>
        <span>Группа: {settings.groupName}</span>
        <span>День: {date.weekdays[date.time.weekday()-1]}</span>
        </div>
    </div> );
}

export default Head;