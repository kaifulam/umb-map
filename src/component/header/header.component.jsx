import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Modal } from 'react-bootstrap';
import CustomButton from '../custom-button/custom-button.component';

import { ReactComponent as Logo } from '../../assets/crwn.svg';

import './header.styles.scss';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <div className='header'>
                    <Link className='logo-container' to="/">
                        <Logo className='logo' />
                    </Link>
                    <div className='title'>Unreinforced Masonary Buildings</div>
                    <div className='options'>
                        <CustomButton className='option'> Filter... </CustomButton>
                        <CustomButton className='option'> About </CustomButton>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Header;


//<div className='header' rel="stylesheet" type="text/css" href="./header.styles.scss">