import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { NoteContext } from '../context/note-context';

const View = () => {
    const searchParams = useSearchParams();
    let val ='';
    for(let [key,value] of searchParams[0].entries()){
        console.log('Val is ',value);
        val = value;
    }
  return (
    <div>
        <NoteContext.Consumer>
            {(value)=>{
                return(<h1>Value is {val} Note length is {value.notes.length}</h1>)
            }}
        </NoteContext.Consumer>
    </div>
  )
}

export default View