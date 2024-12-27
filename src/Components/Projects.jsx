import React from 'react'
import SectionHeading from './SectionHeading'
import ProjectItem from './ProjectItem'
import { projecList } from '../assets/assets'

const Projects = () => {
  return (
    <section id='projects' className='projects mt-32'>
        <SectionHeading heading="Projects" subHeading="Things I’ve built so far"/>

        <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-up'>
            {
                projecList.map((item, index) => (
                    <ProjectItem key={index} image={item.image} title={item.title} description={item.description} liveLink={item.liveLink} githubRepo={item.githubRepo}/>
                ))
            }
        </div>
    </section>
  )
}

export default Projects