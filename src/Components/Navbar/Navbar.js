import React, { Component } from 'react';
import { MenuItems } from "./Menuitem";
import './Navbar.css'
import { Button } from "../Button";
        class Navbar extends Component{
            state = {clicked: false}
            handleclick = () => {
                this.setState({ clicked: !this.state.clicked })
            } 
            render (){
                return(
                    <nav className="NavbarItems">
                        <h1 className="navbar-logo">wallealv</h1>
                        <div className="menu-icon" onClick={this.handleclick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu inactive'}>
                        {MenuItems.map((item, index)=> {
                            return(
                                <li key={index}><a className={item.cName} href={item.url}>
                                    {item.title}
                                </a></li>
                            )
                        })}
                        </ul>
                        <Button>Subscribite</Button>

                    </nav>
                )
            }
        }
        export default Navbar