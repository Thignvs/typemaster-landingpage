import React from 'react'
import HeroKB from '../mobile/image-keyboard.jpg'
import PreorderOrange from './buttons/PreorderOrange'
import HeroKBTablet from '../tablet/image-keyboard.jpg'
import HeroKBDesktop from '../desktop/image-keyboard.jpg'
import GrayPattern from '../shared/pattern-square.svg'

const Hero = () => {
    return (
        <div className='flex flex-col items-center overflow-hidden md:flex-row lg:px-20'>
            <div className='px-5 md:w-2/5'>
                <h1 className='text-DarkBlue text-5xl mt-5 py-5 font-black uppercase lg:text-6xl'>Typemaster Keyboard</h1>
                <h2 className='leading-7 text-LightBlue'>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</h2>
                <div className='flex justify-between items-center py-10 lg:justify-start lg:gap-5'>
                    <PreorderOrange />
                    <p className='text-LightBlue uppercase font-bold'>Release 11/27</p>
                </div>
            </div>
            <div className='pl-5 md:w-3/5 mb-10 flex items-center relative'>
                <img className='rounded-l-2xl md:hidden' src={HeroKB} alt="imageKeyboard" />
                <img className='hidden md:block lg:hidden rounded-l-2xl' src={HeroKBTablet} alt="imageKeyboard" />
                <img className='hidden lg:block rounded-2xl w-[80%]' src={HeroKBDesktop} alt="imageKeyboard" />
                <img className='hidden lg:block absolute top-0 -right-40 xl:-right-32' src={GrayPattern} alt="graySquare" />
            </div>
        </div>
    )
}

export default Hero