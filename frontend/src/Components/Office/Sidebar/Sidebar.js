import React from 'react';
import Logo from '../Logo/Logo';
import './Sidebar.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={{ display: 'flex', minHeight:"100vh"}}>
      <CDBSidebar textColor="#fff" style={{backgroundColor:'rgb(206, 206, 205)',color:'black'}} >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
        <Logo/>
          <CDBSidebarMenu >

            <NavLink exact to="/office/home" activeclassname="activeClicked">
              <CDBSidebarMenuItem style={{color:'black'}} icon="home">Dashboard</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/office/batches" activeclassname="activeClicked">
              <CDBSidebarMenuItem style={{color:'black'}} icon="table">Batches</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/office/teachers" activeclassname="activeClicked">
              <CDBSidebarMenuItem style={{color:'black'}} icon="user">Teachers</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/office/view-students" activeclassname="activeClicked">
              <CDBSidebarMenuItem style={{color:'black'}} icon="users">Students</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeclassname="activeClicked">
              <CDBSidebarMenuItem style={{color:'black'}} icon="exclamation-circle">Payments</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" className='mt-5' target="_blank" activeclassname="activeClicked">
            <div className='logout'>
              <CDBSidebarMenuItem  style={{color:'black'}} icon="exclamation-circle">Logout</CDBSidebarMenuItem>
                </div>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        
      </CDBSidebar>
    </div>
  )
}

export default Sidebar
