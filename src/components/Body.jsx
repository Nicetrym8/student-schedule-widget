function Body(props) {
    const today =  new Date();
    const date = `${today.getDay()}.${today.getMonth()}.${today.getFullYear()}`;

    if(props.schedule)
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