import React from 'react';
import './Featured.scss'

interface Props {
    title: string;
    desc: string;
}

const Featured: React.FC<Props> = ({title, desc}) => {
    return (
        <div className="featured">
            <h2 className="featured__title">{title}</h2>
            <p className="featured__desc">{desc}</p>
            <div className="featured__slide">
                slide
            </div>
        </div>
    )
}

export default Featured;