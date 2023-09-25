import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { Header } from '../../shared/components/Header'
import Grid from '@mui/material/Grid';
import { SideBar } from '../components/SideBar';
import Main from '../components/Main';
import { useLocation } from 'react-router';
import { NoteContext } from '../context/note-context';

export const NotesDashboard = () => {
    const location = useLocation();
    const [notes, setNotes] = useState([]);
    if(location && location.state){
        localStorage.setItem('username', location.state.username);
    }

    const addNote = (noteObject)=>{
        console.log("Rec note from Add", noteObject);
        const cloneNotes = [...notes];
        cloneNotes.push(noteObject);
        setNotes(cloneNotes);
    }
  return (
    <Container>
        <Header username = {localStorage.getItem('username')}/>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <SideBar/>
            </Grid>
            <Grid item xs={8}>
                <NoteContext.Provider value={{notes:notes, addSingleNote:addNote}}>
                <Main/>
                </NoteContext.Provider>
            </Grid>
        </Grid>
    </Container>
  )
}
