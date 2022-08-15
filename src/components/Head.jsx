import {Icon} from '@mdi/react'
import {mdiCog} from '@mdi/js'

function Head(props) {
    return ( <div className='logo-container'>
    <Icon path={mdiCog} size={1.5}/>
    <div className="info">
        <span>Последнее обновление: {localStorage.getItem("updateDate")} </span>
        <span>Группа: {props.settings.groupName}</span>
        <span>День: Четверг</span>
        </div>
    </div> );
}

export default Head;