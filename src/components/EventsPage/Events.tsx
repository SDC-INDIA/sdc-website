import Link from 'next/link'
import React from 'react'
import EventCard from './EventCard'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/Auth/auth";
import { motion } from 'framer-motion';


const Events = (props: any) => {
    const { events } = props;
    const [user, loading] = useAuthState(auth);
    return (
        <div className=''>
            <motion.div
                // transition={{ duration: 0.7 }}
                // initial={{ opacity: 0, y: "-100%" }}
                // whileInView={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: "100%" }}
            >
                <h1 className="custom-color-text get-center text-[3.2rem] my-4 font-semibold">Our Events</h1>
                {
                    user &&
                    <div className="flex justify-center">
                        <Link href="/events/add_event" className="bg-orange-500 text-white hover:bg-orange-400 px-4 py-3 rounded-xl font-semibold">Add Event</Link>
                    </div>
                }
            </motion.div>
            {/* <div className="flex justify-center gap-4 lg:gap-8 flex-wrap items-center"> */}
            <div className="">
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
                            id={item.id}
                            image={event.image}
                            title={event.title}
                            description={event.description}
                            date={event.date}
                            user={user}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Events