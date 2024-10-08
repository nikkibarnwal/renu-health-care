import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import events from "./eventData"; // Import the event data

gsap.registerPlugin(ScrollTrigger);

const Event = () => {
  return (
    <>
      {/* Hero section */}
      <div className="bg-white mx-auto w-full sm:w-11/12">
        <div
          className="mb-4 contact-hero flex items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat w-full h-[240px] sm:h-[447px] md:h-[500px]"
          style={{
            backgroundImage: `url("/Events/event-img.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="event-heading text-3xl sm:text-5xl lg:text-6xl font-semibold text-white">
            Events
          </h1>
        </div>

        {/* Header Section */}
        <header className="text-center py-8 bg-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Events</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700">
            Stay updated on events and initiatives, from health camps to
            community outreach programs and internships. Join us as we bring
            positive change through impactful events and activities.
          </p>
        </header>

        {/* Events */}
        <div className="events-box flex flex-wrap justify-center mx-2 mt-10 mb-20 gap-6 sm:gap-8">
          {events.map((event) => (
            <Card key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
};

/* Single event component */
const Card = ({ event }) => {
  return (
    <div className="card bg-green-50 w-full sm:max-w-xs md:max-w-sm lg:w-[386.67px] h-auto rounded-[12px] border-b border-green-600 p-2 flex flex-col justify-between transition-transform duration-300 hover:shadow-lg transform hover:scale-105">
      {/* Event image */}
      <div className="h-48 lg:h-56">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={event.image}
          alt={event.title}
        />
      </div>

      {/* Event description */}
      <div className="flex flex-col justify-between flex-grow mt-2">
        <h3 className="text-base lg:text-lg font-bold">{event.title}</h3>

        {/* Flex container for date and time */}
        <div className="flex justify-between text-sm mb-2">
          <p className="event-date">{event.date}</p>
          <p className="event-time">Time: {event.time}</p>
        </div>

        <p className="event-content text-sm sm:text-base mb-1 mt-2">
          {event.description}
        </p>

        {/* Show Interest button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded-md"
          >
            Show Interest
          </button>
        </div>
      </div>
    </div>
  );
};

// GSAP animations
gsap.from(".card", {
  y: 20,
  opacity: 0,
  duration: 1,
  scale: 0.2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    scrub: 1,
  },
});

gsap.to(".event-heading", {
  y: -100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".events-box",
    scroller: "body",
    scrub: 1,
  },
});

export default Event;
