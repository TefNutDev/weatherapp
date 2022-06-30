import React from 'react'
import spinner from '../public/loaderball.gif'

const Spinner = () => {
    return (
        <>
            <Image alt='Loading..' src={spinner} className='w-[200px] m-auto' />
        </>
    )
}

export default Spinner