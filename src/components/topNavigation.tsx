import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import AuthContext from "../context/auth-context"
import "./topNavigation.css"
const  TopNavigation = () => {
const [collapse, setCollapse] = useState(false)
const [dropdownOpen, setdropdownOpen] = useState(false)
    const click = () => {
        setCollapse(!collapse)
    }

                
    
    const toggle = () => {
        setdropdownOpen(!dropdownOpen)
    }

        return (
            <AuthContext.Consumer>
                {(context)=>{
                    return <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                    <MDBNavbarBrand href="/">
                        <strong>Home</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick = { click } />
                    <MDBCollapse isOpen = { collapse } navbar>
                        
                        {

                            context.isConnected ? <MDBNavbarNav right><MDBNavItem><MDBNavLink to="/dashboard">Dashboard</MDBNavLink></MDBNavItem><MDBNavItem><MDBNavLink to="/dashboard">{context.authenticatedUser.name}</MDBNavLink></MDBNavItem></MDBNavbarNav> : <MDBNavbarNav right><MDBNavItem><MDBNavLink to="/login"><MDBIcon icon="sign-in-alt" className="mr-2"/>Login</MDBNavLink></MDBNavItem><MDBNavItem><MDBNavLink to="/register"><MDBIcon icon="user-plus" className="mr-2"/>Register</MDBNavLink></MDBNavItem></MDBNavbarNav>
                        }
                        
                    </MDBCollapse>
                </MDBNavbar>
                }}
            </AuthContext.Consumer>
            
        );
    
}

export default TopNavigation;