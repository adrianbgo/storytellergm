import { faBook, faDiceD20, faDragon, faHourglass, faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className='flex flex-row mx-[20vw] my-3'>
            <Image src="https://placehold.co/300x300.png" width={300} height={300} alt="Picture of Adrian Bauer" className='w-[300px] rounded-full' />
            <div className='flex flex-col items-start justify-around ml-10 my-5 text-2xl'>
                <p><FontAwesomeIcon icon={faDragon} /> Content creator & founder of Storyteller GM</p>
                <p><FontAwesomeIcon icon={faHourglass} /> 10+ years of experience</p>
                <p><FontAwesomeIcon icon={faBook} /> Bachelor&apos;s Degree in Psychology</p>
                <p><FontAwesomeIcon icon={faDiceD20} /> Game Master and host of a weekly One-Shot live play podcast</p>
                <p><FontAwesomeIcon icon={faMagicWandSparkles}/> Dynamic and creative storyteller</p>
            </div>
        </section>
    )
}

export default About