
function Settings({settings,setSettings,setSchedule}) {
    function handleInput({target}){
        if(settings[target.name] !== null){
            let tempSettings = {...settings};
            tempSettings[target.name] = target.value;
            if(target.name === "groupName"){
                localStorage.removeItem("updateDate");
                localStorage.removeItem("schedule");
            }
            setSettings(settings=>
                ({...tempSettings})
            );
        }
    }
    return ( <div className="schedule">
        <div>
            <span>Номер группы: </span>
            <input onBlur={handleInput} name="groupName" className="input" defaultValue={settings.groupName}></input>
        </div>

        <div>
            <span>Основной цвет: </span>
            <input onChange={handleInput} style={{color:settings.primaryColor}} name="primaryColor" className="input" defaultValue={settings.primaryColor}></input>
        </div>
        <div>
            <span>Цвет ЛК: </span>
            <input onChange={handleInput} name="ЛК" style={{color:settings["ЛК"]}} className="input" defaultValue={settings["ЛК"]}></input>
        </div>
        <div>
            <span>Цвет ПЗ: </span>
            <input onChange={handleInput} name="ПЗ" style={{color:settings["ПЗ"]}} className="input" defaultValue={settings["ПЗ"]}></input>
        </div>
        <div>
            <span>Цвет ЛР: </span>
            <input onChange={handleInput} name="ЛР" style={{color:settings["ЛР"]}} className="input" defaultValue={settings["ЛР"]}></input>
        </div>
        <div>
            <span>Цвет ЛР: </span>
            <input onChange={handleInput} type="" name="ЛР" style={{color:settings["ЛР"]}} className="input" defaultValue={settings["ЛР"]}></input>
        </div>
    </div> );
}

export default Settings;