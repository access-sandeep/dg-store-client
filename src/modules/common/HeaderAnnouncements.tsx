import React from "react";

export default function HeaderAnnouncements({message}: {message: string}) {
    return (
        <div className='row bg-primary text-white text-center'>
            <div className='col-12'>{message}</div>
        </div>
    )
}