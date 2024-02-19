import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='bg-blue-200 mt-20 w-full h-[70vh] flex flex-col items-center  justify-around px-[30vw]'>
        <p className='text-7xl text-white text-center'>Hire a professional Game Master!</p>
        <p className="text-3xl text-white text-center">Bring your party to life with a game run by a Storyteller GM</p>
        <blockquote className='text-white text-2xl'>
            {`"Adrian is not only a great GM but he is an awesome person that puts his all into making sure everyone is having fun."`}
            <br/><cite>-AshyTheBard</cite>
        </blockquote>
        <Button href='#' text='Learn More' logo />
    </section>
  )
}

export default Hero