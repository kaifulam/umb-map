import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

//import { ReactComponent as Logo } from '../../assets/crwn.svg';

//import './header.styles.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import './header.styles.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <div className='navbar'>
                    {/* <Link className='logo-container' to="/">
                        <Logo className='logo' />
                    </Link> */}
                    <div className='title'>
                        <h4><b>&ensp;Unreinforced Masonary Buildings in Seattle</b></h4>
                    </div>
                    <div className='options'>
                        <CustomButton className='option' id='filterButton'> Filter... </CustomButton>
                        &ensp;
                        <CustomButton className='option' id='aboutButton'> About </CustomButton>
                        &ensp;
                    </div>
                </div>
            </React.Fragment >

        )
    }
}

export default Header;


//<div className='header' rel="stylesheet" type="text/css" href="./header.styles.scss">