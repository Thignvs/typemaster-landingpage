import React from 'react'
import logo from '../shared/logo.svg'
import PreorderGray from './buttons/PreorderGray'

const NavBar = () => {
    return (
        <div className='flex justify-between p-5 items-center md:p-10 lg:px-24'>
            <img src={logo} alt=" logo" />
            <PreorderGray />
        </div>
    )
}

export default NavBar