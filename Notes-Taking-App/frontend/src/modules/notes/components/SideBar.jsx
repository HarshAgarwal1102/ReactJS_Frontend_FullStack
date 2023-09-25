import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideBar = () => {
  return (
    <>
        <br/>
        <NavLink to="/dashboard"> Home </NavLink>
        <br/><br/>
        <NavLink to="/dashboard/add-note/Add"> Add Note </NavLink>
        <br/><br/>
        <NavLink to="/dashboard/view-notes?type=Delete"> Delete Note </NavLink>
        <br/><br/>
        <NavLink to="/dashboard/view-notes?type=View"> View Notes </NavLink>
        <br/><br/>
        <NavLink to="/dashboard/view-notes?type=Search"> Search Note </NavLink>
        <br/><br/>
        <NavLink to="/dashboard/add-note/Update"> Update Note </NavLink>
        <br/><br/>

    </>
  )
}
