import moment from "moment";
import {date} from "../constants"

function Body({settings,schedule, currentWeek}) {
    if(schedule === null){ return (
      <div></div>);
    }
    const startDate = moment(schedule.startDate,"DD.MM.YYYY").unix();
    const endDate = moment(schedule.endDate,"DD.MM.YYYY").unix();
    if(false/*endDate < date.time.unix() < startDate */)
    return ( <div className="schedule">
        Начало занятий {schedule.startDate}
    </div>)
    return (   <div className='schedule'>
      {schedule.schedules[date.weekdays[date.time.weekday()-1]].map((lesson,key)=>{
        if(lesson.weekNumber.includes(currentWeek)){
          return (<div key={key} >
            <span>{lesson.subject}</span>
            <span style={{
              color: settings.lessonTypeColors[lesson.lessonTypeAbbrev]
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