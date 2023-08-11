import React from 'react'
import compatible from '../shared/icon-compatible.svg'
import bluetooth from '../shared/icon-bluetooth.svg'
import battery from '../shared/icon-battery.svg'
import light from '../shared/icon-light.svg'

const Description = () => {
    return (
        <div className='flex flex-col px-5 md:grid md:grid-cols-2 lg:flex lg:items-center lg:flex-row lg:px-40'>
            <div className='text-center md:text-start flex flex-col items-center md:items-start  py-5'>
                <div className='bg-Orange flex items-center justify-center p-5 rounded-xl w-16 h-14'>
                    <img className='' src={compatible} alt="iconscreen" />
                </div>
                <p className='text-DarkBlue uppercase text-3xl font-extrabold py-10 md:px-0 w-1/2'>Highly Compatible</p>
                <p className='text-LightBlue md:w-2/3 lg:w-[80%]'>Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.</p>
            </div>
            <div className='text-center md:text-start flex flex-col items-center md:items-start  py-5'>
                <div className='bg-Orange flex items-center justify-center p-5 rounded-xl w-16 h-14'>
                    <img className='' src={bluetooth} alt="iconbluetooth" />
                </div>
                <p className='text-DarkBlue uppercase text-3xl font-extrabold py-10 md:px-0 md:w-10/12'>WIRELESS WITH BLUETOOTH</p>
                <p className='text-LightBlue md:w-2/3 lg:w-[80%]'>Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.</p>
            </div>
            <div className='text-center md:text-start flex flex-col items-center md:items-start py-5'>
                <div className='bg-Orange flex items-center justify-center p-5 rounded-xl w-16 h-14'>
                    <img className='' src={battery} alt="iconbattery" />
                </div>
                <p className='text-DarkBlue uppercase text-3xl font-extrabold py-10 md:px-0 w-2/3 md:w-10/12'>HIGH CAPACITY BATTERY</p>
                <p className='text-LightBlue md:w-2/3 lg:w-[80%]'>Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.</p>
            </div>
            <div className='text-center md:text-start flex flex-col items-center md:items-start  py-5'>
                <div className='bg-Orange flex items-center justify-center p-5 rounded-xl w-16 h-14'>
                    <img className='' src={light} alt="iconlight" />
                </div>
                <p className='text-DarkBlue uppercase text-3xl font-extrabold py-10 md:px-0 w-2/3 md:w-1/2'>RGB BACKLIT MODES</p>
                <p className='text-LightBlue md:w-2/3 lg:w-[80%]'>Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.</p>
            </div>
        </div>
    )
}

export default Description