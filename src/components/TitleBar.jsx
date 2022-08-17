import { appWindow } from '@tauri-apps/api/window'
import Icon from '@mdi/react';
import {mdiRefresh} from "@mdi/js"
function TitleBar() {
    return ( <div data-tauri-drag-region className="titlebar">
    <div onClick={()=>{
        appWindow.minimize();
    }} className="titlebar-button">
    <div>
        [
    </div>
    <Icon className="control-button" path={mdiRefresh} size={0.5}/>
    <div>
        ]
    </div>
    </div>
  </div> );
}

export default TitleBar;

