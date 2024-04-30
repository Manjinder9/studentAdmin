import React from 'react';
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarSubMenu,
    CDBSidebarFooter,
} from 'cdbreact';
import {NavLink} from "react-router-dom";


function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid" >
                    <a className="navbar-brand d-flex align-items-center" href="https://www.yukonu.ca/">
                        <img src = {require('../img/uni-logo.png')} alt="" width="175" height="75"
                             className="d-inline-block align-text-top"/>
                        Student Admin
                    </a>
                </div>
            </nav>

            <div className={"sidebar"}>
                <CDBSidebar textColor={"#333"} backgroundColor={"#fafaf9"}>
                    <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
                    <CDBSidebarContent>
                        <CDBSidebarMenu>

                            <NavLink to={"/"} className={"activateClicked"}>
                                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink to={"/students"} className={"activateClicked"}>
                                <CDBSidebarMenuItem icon="list">Student List</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink to={"/manage"} className={"activateClicked"}>
                                <CDBSidebarMenuItem icon="user" iconType="solid">
                                    Manage Students
                                </CDBSidebarMenuItem>
                            </NavLink>

                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        </div>
    );
}

export default Navbar;