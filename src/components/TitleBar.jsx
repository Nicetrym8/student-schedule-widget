import { appWindow } from '@tauri-apps/api/window'
import Icon from '@mdi/react';
import {mdiClose} from "@mdi/js"
function TitleBar() {
    return ( <div data-tauri-drag-region class="titlebar">
    <div onClick={()=>{
        appWindow.minimize();
    }} className="titlebar-button">
    <div>
        [
    </div>
    <Icon className="control-button" path={mdiClose} size={0.5}/>
    <div>
        ]
    </div>
    </div>
  </div> );
}

export default TitleBar;

