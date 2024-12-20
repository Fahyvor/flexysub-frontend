import React from 'react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='bg-[#f20d45ff] text-white flex justify-center py-3 fixed bottom-0 w-full'>
            <small className='text-center font-bold'>&copy; Flexysub {currentYear}</small>
        </div>
    )
}

export default Footer
