import React from 'react'

function Acomplishments() {
    return (
        <div className="pb-10">
            <div className="border-b-4 border-red-400 w-28 mb-5  rounded-full " />
            <p className="text-3xl font-medium mb-5">Personal Acomplishments </p>

            <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-7">

                <div className="h-36 bg-background rounded-3xl text-center pt-10">
                    <p className="text-4xl font-medium">5+</p>
                    <p className="text-gray-400">Open Source Projects</p>

                </div>
                <div className="h-36 bg-background  rounded-3xl text-center pt-10">
                <p className="text-4xl font-medium">15+</p>
                    <p className="text-gray-400"> React js project</p>

                </div>
                <div className="h-36 bg-background rounded-3xl text-center pt-10">
                <p className="text-4xl font-medium">50+</p>
                    <p className="text-gray-400">Github Followers</p>

                </div>
                <div className="h-36 bg-background rounded-3xl text-center pt-10">
                <p className="text-4xl font-medium">10+</p>
                    <p className="text-gray-400">Github Start</p>

                </div>
            </div>

        </div>
    )
}

export default Acomplishments
