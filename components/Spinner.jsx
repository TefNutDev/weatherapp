import React from 'react'
import spinner from '../public/loaderball.gif'
import Image from 'next/image'

const Spinner = () => {
    return (
        <>
            <Image alt='Loading..' src={spinner} className='w-[200px] m-auto' />
        </>
    )
}

export default Spinner