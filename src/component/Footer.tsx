import React from 'react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='bg-red-600 text-white flex justify-center py-3'>
            <small className='text-center font-bold'>&copy; Flexysub {currentYear}</small>
        </div>
    )
}

export default Footer
