import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <Link to='/'>Home</Link><br/>
                <Link to='/todos'>Todos</Link>
            </nav>
        )
    }
}

export default Header;
