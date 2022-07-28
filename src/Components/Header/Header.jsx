import { useState } from 'react';
import a from './Header.module.css'
import Left from './Left/Left'
import RightAuto from './Right/RightAuto';
import RightDefault from './Right/RightDefault';



const Header = ({ isloged }) => {

    return (

        <div className={a.headercontainer}>
            <div className={a.header}>
                <Left />
                {isloged ? <RightAuto right={isloged} /> : <RightDefault right={isloged} />}
            </div>

        </div>
    );
}

export default Header;