import React from 'react';
import { Testimonials2 } from '@interfaces/common';

type Testimonial2Props = {
    testimonial : Testimonials2;
}

const Testimonial2: React.FC<Testimonial2Props> = ({testimonial}) => {
    return (
        <>
            <img className="testimonial__img" src={testimonial.img} alt={testimonial.alt} />
            <div className="testimonial__bubble">
                <p>{testimonial.description}</p>
                <p><a href="#" className="testimonial__bubble__name">{testimonial.name}</a> / {testimonial.company}</p>
            </div>
        </>
    );
}

export default Testimonial2;

