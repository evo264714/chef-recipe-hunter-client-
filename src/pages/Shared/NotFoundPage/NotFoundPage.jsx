import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './NotFoundPage.css'

const NotFoundPage = () => {
    const { error } = useRouteError();
    return (
        <div className='error-container'>
            <div className="error-container-1">
                <img className='error-img' src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hFwwQAW45673VGKrMPE2qQ.png' />
                <p className='error-para'>{error?.message}</p>
                <Link to="/" className="error-homepage">Go back to homepage</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;