import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row mt-15 gap-5 max-w-[1416px] mx-auto p-4 md:p-0'>
            <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
                <img src="https://i.ibb.co.com/Zpb6FqGJ/vector1.png" className='' alt="Vector" />
                <img src="https://i.ibb.co.com/Zpb6FqGJ/vector1.png" className='absolute right-0 top-1/2 -translate-y-1/2 -scale-x-100' alt="Vector" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl font-semibold">In-Progress</h1>
                    <p className='text-6xl font-bold'>0</p>
                </div>
            </div>

            <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white">
                <img src="https://i.ibb.co.com/Zpb6FqGJ/vector1.png" className='' alt="Vector" />
                <img src="https://i.ibb.co.com/Zpb6FqGJ/vector1.png" className='absolute right-0 top-1/2 -translate-y-1/2 -scale-x-100' alt="Vector" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl font-semibold">Resolved</h1>
                    <p className='text-6xl font-bold'>0</p>
                </div>
            </div>

        </div>
    );
};

export default Banner;
