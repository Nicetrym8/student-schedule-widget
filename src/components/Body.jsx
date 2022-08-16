import moment from "moment";
import {date,settings} from "../constants"
function Body({schedule, currentWeek}) {
    const startDate = moment(schedule.startDate,"DD.MM.YYYY").unix();
    const endDate = moment(schedule.endDate,"DD.MM.YYYY").unix();
    if(false/*endDate < date.time.unix() < startDate */)
    return ( <div className="schedule">
        Начало занятий {schedule.startDate}
    </div>)
    console.log(schedule.schedules[date.weekdays[date.time.weekday()-1]])
    return (   <div className='schedule'>
      {schedule.schedules[date.weekdays[date.time.weekday()-1]].map(lesson=>{
        if(lesson.weekNumber.includes(currentWeek)){
          return (<div className="lesson_formmat">
            <span>{lesson.subject}</span>
            <span style={{
              color: settings.lessonTypeColors[lesson.lessonTypeAbbrev]
            }}> ({lesson.lessonTypeAbbrev})</span>
            <span> {`${lesson.startLessonTime} - ${lesson.endLessonTime}`}</span>
            </div> );
        }
  })}
  </div> );
}

export default Body;