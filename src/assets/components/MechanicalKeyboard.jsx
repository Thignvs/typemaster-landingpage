import React from 'react'
import glasskb from '../mobile/image-glass-and-keyboard.jpg'
import glasskbtablet from '../tablet/image-glass-and-keyboard.jpg'
import glasskbdesktop from '../desktop/image-glass-and-keyboard.jpg'
import squarePattern from '../shared/pattern-square.svg'

const MechanicalKeyboard = () => {
    return (
        <div className='flex flex-col overflow-hidden pb-20 lg:flex-row gap-5'>
            <img className='hidden lg:block relative self-end -left-5' src={squarePattern} alt="squarepattern" />


            <div className='flex pr-5 md:px-5 lg:px-0 lg:w-[60%] gap-5'>
                <div className='w-[50%] bg-[url("/src/assets/mobile/image-phone-and-keyboard.jpg")] md:bg-[url("/src/assets/tablet/image-phone-and-keyboard.jpg")] lg:bg-[url("/src/assets/desktop/image-phone-and-keyboard.jpg")] bg-cover md:w-[40%] bg-blend-multiply bg-no-repeat rounded-r-xl  bg-Orange md:rounded-2xl'></div>
                
                <img className='w-[60%] md:hidden ml-auto rounded-2xl' src={glasskb} alt="glassandkeyboardimage" />
                <img className='hidden md:block lg:hidden w-[60%] ml-auto rounded-2xl' src={glasskbtablet} alt="glassandkeyboardimage" />
                <img className='hidden lg:block w-[60%] lg:w-[100%] rounded-2xl' src={glasskbdesktop} alt="glassandkeyboardimage" />
            </div>
            <div className='flex flex-col py-10 px-5 md:flex-row text-center md:text-start md:justify-between lg:flex-col lg:w-[40%] lg:px-20 lg:self-center'>
                <p className='text-DarkBlue font-extrabold uppercase text-3xl'>Mechanical Wireless Keyboard</p>
                <p className='text-LightBlue pt-5 leading-7 md:w-[80%nopm]'>The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</p>
            </div>
        </div>
    )
}

export default MechanicalKeyboard