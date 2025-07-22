import React from 'react'
import "./about.css"
import me3 from "../../assets/me3.jpeg";
import Info from './Info';
import CV from "../../assets/John-Cv.pdf"

export const About = () => {
  return (
    <>
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img src={me3} alt="" className="about__img" />

                <div className="about__data">
                    <Info/>

                    <p className="about__description">
                        I am an IT undergraduate student with a strong interest in Data Analysis. 
                        I have hands-on experience in developing web applications, and 
                        I am currently focusing on extracting insights from data using tools like Python, R, Power BI, SQL, and Excel. 
                        I'm passionate about turning raw data into meaningful information to support better decision-making..
                    </p>

                    <a download="" href={CV} className="button button--flex">Download CV
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}
