import React from 'react'
import { Hourglass } from 'react-loader-spinner'

function Loader() {
    return (
        // full screen container for loader
        <div className='w-full h-screen flex justify-center items-center'>
            (<Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['black', 'green']}
            />)
        </div>
    )
}

export default Loader