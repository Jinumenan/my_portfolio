import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const[toggleState, setToggleState] = useState(1)

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <>
        <section className="qualification section qualification_home__bg" id ="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personel Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}  onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>
                                    {/* <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                    </div> */}
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>
                                {/* <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                </div> */}
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BSc(Hons) in IT Specialising in IT</h3>
                                <span className="qualification__subtitle">Sri Lanka - SLIIT</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Methodist Central College, Batticaloa</h3>
                                <span className="qualification__subtitle">HSC (Physical Science Stream)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2018 - 2021/22
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* Work Experience Section */}

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Title</h3>
                                <span className="qualification__subtitle">subtitle</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>year
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Title</h3>
                                <span className="qualification__subtitle">Sub-title</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>year
                                </div>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Title</h3>
                                <span className="qualification__subtitle">Sub-Title</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>year
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Qualification