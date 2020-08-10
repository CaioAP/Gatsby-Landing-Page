import React from 'react'
import { slide as Menu } from 'react-burger-menu'

export default () => (
    <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="posts" className="menu-item" href="/posts">Postagens</a>
        <a id="contact" className="menu-item" href="/contact">Contato</a>
        {/* <a id="settings" className="menu-item--small" href="">Settings</a> */}
    </Menu>
)