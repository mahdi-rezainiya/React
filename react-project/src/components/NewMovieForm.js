// import { useState , useRef } from 'react';
import './NewMovieForm.css';
import { useState } from 'react';
// import Title from './Title';

export default function NewMovieForm(props) {

    const [title , setTitle] = useState('');
    const [date , setDate] = useState('');
    const [genre , setGenre] = useState("action");

    // const title = useRef()
    // const date = useRef()



    // const handleChange = (e) => {
    //     // console.log(e.target.value);
    //     setTitle(e.target.value)
    // }

    const resetForm = () => {
        setTitle("")
        setDate("");
        setGenre("action")
    
        // title.current.value  = ""
        // date.current.value = ""
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const event = {
            title : title,
            date : date,
            genre : genre ,
            id : Math.floor(Math.random() * 10000)
        }

        // const event = {
        //     title : title.current.value,
        //     date : date.current.value,
        //     id : Math.floor(Math.random() * 10000) ,
        //     genre : genre
        // }

        // console.log(event);

        props.addMovie(event)

        resetForm()
        // console.log(title.current.value);
        // console.log(date.current.value);

    }


    return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="mahdi"></label>
        <input type="text" id="mahdi" /> */}

        <label>
            <span>Movie Title:</span>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            {/* <input type="text" ref = {title} /> */}
        </label>

        <label>
            <span>Movie Date:</span>
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
            {/* <input type="date" ref={date} /> */}
        </label>

        <label>
            <span>Movie Genre</span>
            <select onChange={(e) => setGenre(e.target.value)}>
                <option value="action">Action</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="thriller">Thriller</option>
                <option value="adventure">Adventure</option>
                <option value="romantic">Romantic</option>
                <option value="fantasy">Fantasy</option>
                <option value="western">Western</option>
            </select>
        </label>

        <button>Submit</button>

        {/* <p>Title : {title} , Date : {date}</p> */}
        {/* <p onClick={resetForm}>Reset The Form </p> */}

    </form>
    )
}
