import React from "react";
import './layout.css';

const Layout = (props) => {
    const handleClick = () => {}
    return(
    <div className='frame'>
        <div className='calculator'>
            <br></br>
            <img/>
            <div className='keys'>
                <input type='button' value = {'C'} className='button clear' onClick={handleClick}> </input>
                <input type='button' value={'DEL'} className='button clear' onClick={handleClick}></input>
            </div>
        </div>
    </div>
    )
};

export default Layout;

