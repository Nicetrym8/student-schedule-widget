import {useState} from "react";
function Settings({settings,setSettings}) {
    const[localSettings,setLocalSettings]  = useState(settings);
    function handleInput({target}){
        if(localSettings[target.name] !== null){
            setLocalSettings((settings)=>{
                localSettings[target.name]= target.value;
                return localSettings;
            });
        }
    }
    return ( <div className="schedule">
        <div>
            <span>{localSettings.groupName} </span>
            <input onBlur={handleInput} name="groupName" className="input" defaultValue={localSettings.groupName}></input>
        </div>
        <div>
            <span>Основной цвет: </span>
            <input onChange={handleInput} style={{color:localSettings.primaryColor}} name="primaryColor" className="input" defaultValue={localSettings.primaryColor}></input>
        </div>
        <div>
            <span>Цвет ЛК: </span>
            <input onChange={handleInput} name="ЛК" style={{color:localSettings.lessonTypeColors["ЛК"]}} className="input" defaultValue={localSettings.lessonTypeColors["ЛК"]}></input>
        </div>
        <div>
            <span>Цвет ПЗ: </span>
            <input onChange={handleInput} name="ПЗ" style={{color:localSettings.lessonTypeColors["ПЗ"]}} className="input" defaultValue={localSettings.lessonTypeColors["ПЗ"]}></input>
        </div>
        <div>
            <span>Цвет ЛР: </span>
            <input onChange={handleInput} name="ЛР" style={{color:localSettings.lessonTypeColors["ЛР"]}} className="input" defaultValue={localSettings.lessonTypeColors["ЛР"]}></input>
        </div>
    </div> );
}

export default Settings;