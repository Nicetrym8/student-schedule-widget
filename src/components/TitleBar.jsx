import Icon from '@mdi/react';
import { appWindow } from '@tauri-apps/api/window';
import {mdiRefresh,mdiContentSave} from "@mdi/js"

function TitleBar({settings,setSettings}) {
    function setPosition(position){
            settings["position"] = position;
            setSettings({...settings});
            localStorage.setItem("settings",JSON.stringify(settings));
        }
    return ( <div data-tauri-drag-region className="titlebar">
    <div onClick={()=>{
        document.location.reload()
    }} className="titlebar-button refresh-button">
    <div>
        [
    </div>
    <Icon className="control-button" path={mdiRefresh} size={0.5}/>
    <div>
        ]
    </div>
    </div>
    <div onClick={ async ()=>{
        const position = await appWindow.innerPosition();
        setPosition(position);
    }} className="titlebar-button">
    <div>
        [
    </div>
    <Icon className="control-button" path={mdiContentSave} size={0.5}/>
    <div>
        ]
    </div>
    </div>
  </div> 
  );
}

export default TitleBar;

