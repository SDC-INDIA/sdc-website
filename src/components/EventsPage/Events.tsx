import Link from 'next/link'
import React from 'react'
import EventCard from './EventCard'


const Events = (props: any) => {
    const { events } = props;
    return (
        <div className=''>
            <h1 className="custom-color-text get-center text-[3.8rem] my-4 font-semibold">Our Events</h1>
            <div className="flex justify-center">
                <Link href="/events/add_event" className="bg-orange-500 text-white hover:bg-orange-400 px-4 py-3 rounded-xl font-semibold">Add Blog</Link>
            </div>
            <div className="flex justify-center gap-4 lg:gap-8 flex-wrap items-center">
                <EventCard
                    image="https://images.pexels.com/photos/17021500/pexels-photo-17021500/free-photo-of-cat-looking-up.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    title='Web Development'
                    description='Mastering JavaScript in 30 Days: A Comprehensive Guide for Success'
                    date='Nov 8, 2022'
                />
                {
                    events.docs && events.docs.map((item: any, index: any) => {
                        const event = item.data();
                        return <EventCard
                            key={index}
                            image={event.image}
                            title={event.title}
                            description={event.description}
                            date={event.date}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Events