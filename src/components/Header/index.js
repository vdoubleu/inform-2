import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink } from "reactstrap";

import "../../styles/components/Header/header.css";

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar id="nav" dark expand="md">
            <NavbarBrand href="/#/"> Inform </NavbarBrand>

            <NavbarToggler onClick={toggleNavbar} className="mr-2" />

            <Collapse isOpen={!collapsed} navbar>
                <Nav className="header-items-right" navbar>
                    <NavItem>
                        <NavLink href="/#/">
                            Posts
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/">
                            My Account
                        </NavLink>
                    </NavItem> 
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;
