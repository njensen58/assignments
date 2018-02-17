import React from 'react';
import VacationSpots from './VactionSpots';


const vacationSpots = [
  {
    place: "Idaho",
    price: "$40",
    timeToGo: "Spring",
    imgUrl: "http://www.rvresortstoday.com/img/campgrounds/103058.jpg"
  },{
    place: "Cancun",
    price: "$900",
    timeToGo: "Winter",
    imgUrl: "https://media-cdn.tripadvisor.com/media/photo-o/01/40/ce/cd/another-view-form-room.jpg"
  },{
    place: "China",
    price: "$1200",
    timeToGo: "Fall",
    imgUrl: "https://auspost.com.au/content/dam/auspost_corp/media/images/travel-id/china.jpg.auspostimage.970*0.low.jpg"
  },{
    place: "Russia",
    price: "$1100",
    timeToGo: "Summer",
    imgUrl: "https://i2.wp.com/earthmysterynews.com/wp-content/uploads/2015/05/teaching_jobs_russia.jpg?fit=560%2C560"
  },{
    place: "Lebanon",
    price: "$400",
    timeToGo: "Spring",
    imgUrl: "http://i.dailymail.co.uk/i/pix/2017/06/06/14/4129A4D700000578-4152868-image-a-47_1496757211372.jpg"
  }
]


function App(){
    const grid = {
        display: "grid",
        gridTemplateColumns: "1fr",
        textAlign: "center",
        backgroundColor: "#eee5"
    }

    const mappedVacations = vacationSpots.map((spot)=>{
        return <VacationSpots place={spot.place} price={spot.price} timeToGo={spot.timeToGo} image={spot.imgUrl}/>;
    })
    
    return (
        <div style={grid}>
            { mappedVacations }
        </div>
    )
}

export default App;
