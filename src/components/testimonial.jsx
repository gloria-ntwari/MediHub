import { useState } from "react";
import client1 from "/client.jpg"; // Make sure this path is correct
import client2 from "/t1.jpg";
import quotes from "/quote-left-solid-24.png";

function Testimonial() {
  const testimonials = [
    {
      name: "Alan Emerson",
      text: "Enim consequatur odio assumenda voluptas voluptatibus esse nobis officia. Magnam, aspernatur nostrum explicabo, distinctio laudantium delectus deserunt quia quidem magni corporis earum inventore totam consectetur corrupti! Corrupti, nihil sunt? Natus.",
      image: client1,
    },
    {
      name: "Jane Doe",
      text:"Enim consequatur odio assumenda voluptas voluptatibus esse nobis officia. Magnam, aspernatur nostrum explicabo, distinctio laudantium delectus deserunt quia quidem magni corporis earum inventore totam consectetur corrupti! Corrupti, nihil sunt? Natus.",
      image: client2,
    },
    // Add more testimonials as needed
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="testimonial">
      <div className="test">
        <p>TESTIMONIAL</p>
      </div>
      <div className="client1">
        <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
      </div>
      <div className="clientp">
        <p>{testimonials[currentTestimonial].name}</p>
      </div>
      <div className="clientp2">
        <p>{testimonials[currentTestimonial].text}</p>
      </div>
      <div className="quotes">
            <img src={quotes} alt=""/>
      </div>
      <div className="carousel-buttons">
        <button onClick={handlePrev}>←</button>
        <button onClick={handleNext}>→</button>
      </div>
    </div>
  );
}

export default Testimonial;
