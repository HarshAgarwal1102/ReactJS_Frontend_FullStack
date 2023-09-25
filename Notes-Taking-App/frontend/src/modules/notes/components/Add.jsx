import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useRef, useState } from 'react'
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import { NoteContext } from '../context/note-context';

const Add = () => {
    const params = useParams();
    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();
    const noteContext = useContext(NoteContext);

    const [message, setMessage] = useState('');

    const takeInput =()=>{
        const noteObject ={
            title : titleRef.current.value,
            desc : descRef.current.value,
            date : dateRef.current.value
        }
        noteContext.addSingleNote(noteObject);
        console.log("Input is ", noteObject);
        setMessage("Note Added...");
    }


  return (
    <div>
        <h1>{params.operationname} Note {message} </h1>
        <TextField inputRef={titleRef} id="outlined-basic" label="Title" variant="outlined"/>
        <br/> <br/> <br/>
        <TextField inputRef={descRef}
            id='outlined-multiline-static'
            label='Desc'
            multiline
            rows={4}
        
        />
        <br/> <br/> <br/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker inputRef={dateRef} label="Note Date" />
        </LocalizationProvider>
        <br/> <br/>
        <Button onClick={takeInput} variant="contained">Add Note</Button>
    </div>
  )
}

export default Add