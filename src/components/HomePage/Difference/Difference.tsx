/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const Difference = () => {
  return (
    <div className="lg:flex lg:justify-around lg:wrap pt-16">
        <div
            className="lg:w-[100%] lg:mb-0 mb-8"
            // transition={{ duration: 1 }}
            // initial={{ opacity: 0, x: "100%" }}
            // whileInView={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: "-100%" }}
        >
            <h1 className="text-[0.99rem] font-bold w-fit custom-color-text mb-4">DIFFERENCE OF US</h1>
            <h1 className="text-[3rem] custom-color-text font-extrabold mb-4">What Makes Us Different From Others?</h1>
            <p className="text-[1.2rem] text-justify">
                SDC is more than just an tech community platform; we're a dynamic community that believes in education through community learning. We connect students, like-minded peers, and experienced professionals through our events, summits, app, and social media platforms, creating an environment for discussions, collaborations, and knowledge-sharing, enriching your learning journey. <br /><br />
                At SDC, we firmly believe that knowledge is the ultimate power. This is why we offer an extensive array of free resources covering the latest tech topics, from web development, cloud computing and cybersecurity to data science, IoT, and AI,  Our blogs, articles, and posts break down these complex subjects, ensuring they are accessible to all, regardless of your expertise level. Whether you're a tech pro or just starting out, SDC has something valuable to offer you. Join our community and tap into the world of tech knowledge and connections, all grounded in the belief that education thrives through community learning.
            </p>
        </div>
        <div className="w-full flex justify-center">
            <Image src='/static/diff.png' alt="" height={100} width={600} />
        </div>
    </div>
  )
}

export default Difference