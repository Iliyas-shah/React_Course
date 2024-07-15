import React from 'react'
import {BsCart3} from 'react-icons/bs'

export default function Sidebar(){
    return(
    <aside id="sidebar">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3 className='icon_header'/>Admin Page
            </div>
            <span className='icon close_icon'></span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCart3 className='icon'/>Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCart3 className='icon'/>Add Faculty
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCart3 className='icon'/>Add Student
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCart3 className='icon'/>Attendance Report
                </a>
            </li>
        </ul>
    </aside>
    );
}