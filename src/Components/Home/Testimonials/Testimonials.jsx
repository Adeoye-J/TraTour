import React from 'react'
import "./testimonials.css"

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            image: "/images/testimonial-1.jpg",
            name: "Skyle Walker",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero ipsam aperiam alias, repellat repudiandae tenetur repellendus accusamus ad consectetur dignissimos enim voluptatem"
        },
        {
            id: 2,
            image: "/images/testimonial-2.jpg",
            name: "Skyle Walker",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero ipsam aperiam alias, repellat repudiandae tenetur repellendus accusamus ad consectetur dignissimos enim voluptatem"
        },
        {
            id: 3,
            image: "/images/testimonial-3.jpg",
            name: "Skyle Walker",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero ipsam aperiam alias, repellat repudiandae tenetur repellendus accusamus ad consectetur dignissimos enim voluptatem"
        },
        {
            id: 4,
            image: "/images/testimonial-4.jpg",
            name: "Skyle Walker",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero ipsam aperiam alias, repellat repudiandae tenetur repellendus accusamus ad consectetur dignissimos enim voluptatem"
        },
        {
            id: 5,
            image: "/images/testimonial-1.jpg",
            name: "Skyle Walker",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero ipsam aperiam alias, repellat repudiandae tenetur repellendus accusamus ad consectetur dignissimos enim voluptatem"
        },
        {
            id: 6,
            image: "/images/testimonial-2.jpg",
            name: "Skyle Walker",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero ipsam aperiam alias, repellat repudiandae tenetur repellendus accusamus ad consectetur dignissimos enim voluptatem"
        },
        {
            id: 7,
            image: "/images/testimonial-3.jpg",
            name: "Skyle Walker",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero ipsam aperiam alias, repellat repudiandae tenetur repellendus accusamus ad consectetur dignissimos enim voluptatem"
        }
    ]



  return (
    <div className='testimonial-container section-spacing'>
        <h2>TESTIMONIALS</h2>
        <h1>What Our Clients Say</h1>
        <div className="testimonial-content">
            {
                testimonials.map((testimonial) => (
                    <div className="testimonial-details" key={testimonial.id}>
                        <div className="image">
                            <img src={testimonial.image} alt="user-image" />
                        </div>
                        <div className="testimonial">
                            <p>{testimonial.text}</p>
                            <span>{testimonial.name}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials