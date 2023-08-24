import React from 'react'
import styles from './EventList.module.css'

export default function EventList(props) {
    const Events = props.events ;
    const HandleClick = props.handleClick ;
    
    return (
    <>
        {Events.map((event , index) => (
        <div className={styles.card} key={event.id}>
            <h2>{index +1}-{event.title}</h2>
            <p>{event.genre} - {event.date}</p>
            <button id={styles.butt} onClick={() => HandleClick(event.id)}>Delete</button>
        </div>
        ))}
    </>

    )
    
}
