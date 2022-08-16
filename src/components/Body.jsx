import moment from "moment";

function Body(props) {
    const weekdays=[
        "Понедельник","Вторник", "Среда", "Четверг","Пятница","Суббота","Воскресенье"
    ];
    const date = moment(new Date())
    const startDate = moment(props.schedule.startDate,"DD.MM.YYYY").unix()
    const endDate = moment(props.schedule.endDate,"DD.MM.YYYY").unix()
    //console.log(props.schedule.schedules[weekdays[date.weekday()-1]]);
    if(false/*endDate < date.unix() < startDate */)
    return ( <div className="schedule">
        Начало занятий {props.schedule.startDate}
    </div>)
    return (   <div className='schedule'>
    <div>ОАИП(ЛК) 9:00-10:35</div>
    <div>ОАИП(ЛК) 9:00-10:35</div>
    <div>ОАИП(ЛК) 9:00-10:35</div>
    <div>ОАИП(ЛК) 9:00-10:35</div>
    <div>ОАИП(ЛК) 9:00-10:35</div>
    <div>ОАИП(ЛК) 9:00-10:35</div>
    <div>ОАИП(ЛК) 9:00-10:35</div>
    <div>ОАИП(ЛК) 9:00-10:35</div>
  </div> );
}

export default Body;