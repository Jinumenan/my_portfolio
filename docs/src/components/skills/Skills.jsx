import React from 'react'
import "./skills.css"
import Data_Analysis from './Data_Analysis'
import WebDevelopment from './WebDevelopment'


const Skills = () => {
  return (
    <>
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <Data_Analysis/>

                <WebDevelopment/>
            </div>
        </section>
    </>
  )
}

export default Skills