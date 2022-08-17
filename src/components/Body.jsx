import {date} from "../constants"

function Body({settings,schedule, currentWeek}) {
    if(schedule === null || Object.keys(schedule.schedules).length === 0){ return (
      <div className="schedule">Расписания еще нет</div>);
    }
    return (   <div className='schedule'>
      {schedule.schedules[date.weekdays[date.time.weekday()-1]].map((lesson,key)=>{
        if(lesson.weekNumber.includes(currentWeek)){
          console.log(lesson);
          return (<div key={key} >
            <span>{lesson.subject}</span>
            <span style={{
              color: settings[lesson.lessonTypeAbbrev]
            }}> ({lesson.lessonTypeAbbrev})</span>
            {lesson.auditories.map(((el,index)=>{
              return <span key={index}> {el} </span>
            }))}
            <span> {`${lesson.numSubgroup !== 0 ? ` (${lesson.numSubgroup})`: `` } ${lesson.startLessonTime} - ${lesson.endLessonTime}`}</span>
            </div> );
        }
        return <></>
  })}
  </div> );
}

export default Body;