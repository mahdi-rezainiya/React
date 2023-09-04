import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import './TripList.css' ;


export default function TripList() {

    // const [trips , setTrips] = useState([]);
    const [url , setUrl] = useState('http://localhost:3000/trips');
    const {data : trips , isLoading , error} = useFetch(url);

    // console.log(trips);

    // fetch('http://localhost:3000/trips')
        // .then(response => response.json())
        // .then(json => console.log(json))
        // .then(json => setTrips(json))

     // useEffect(() =>{
        // fetch(url)
        // .then(response => response.json())
        // .then(json => setTrips(json))
    // } , [url])

    // const fetchTrips = async () => {
        // const response = await fetch(url)
        // const json = await response.json()
        // setTrips(json)
     // }

        // const fetchTrips = useCallback(async() => {
        //     const response = await fetch(url)
        //     const json = await response.json()
        //     setTrips(json)
        // } , [url])
        
        // useEffect(() => {
        //     fetchTrips()
        // } , [fetchTrips])


    return (
    <div className="trip-list">
        <h2>Trip List</h2>
        {isLoading && <div>Loading Trips . . .</div>}
        {error && <div>{error}</div>}
        <ul>
            {trips && trips.map(trip => (
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                </li>
            ))}
        </ul>

        <div className="filters">
            <button onClick={() => setUrl('http://localhost:3000/trips?loc=iran')}>Iranian Trips</button>
            <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
        </div>
    </div>
    )
}
