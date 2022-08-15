import {Icon} from '@mdi/react'
import {mdiCog} from '@mdi/js'

function Head() {
    return ( <div className='logo-container'>
    <Icon path={mdiCog} size={1.5}/>
    <div className="info">
        <span>Последнее обновление: 29.02.2022 </span>
        <span>Группа: 150502</span>
        <span>День: Четверг</span>
        </div>
    </div> );
}

export default Head;