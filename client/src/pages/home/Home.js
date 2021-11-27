import React, { Fragment } from 'react'
import './Home.css'
import HeaderImg from '../../assets/home/web-designer.png'
import AboutImg from '../../assets/home/developers-doing-discussion-about-wireframe.jpg'
import WhyImg from '../../assets/home/people-standing-together.png'
import OneImg from '../../assets/home/business-way-to-success.png'
import TwoImg from '../../assets/home/ideas.png'
import ThreeImg from '../../assets/home/equality.png'






function Home(props) {
    return (
        <Fragment>
           
            <section id="learn" className="p-sm-5 pb-5 pt-sm-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md p-5">
                        <h1>The <span className="text-dark">headstart </span>you need in the<span className="text-primary"> World of Coding.</span></h1>
                            <p className="lead my-4">
                                From your most trivial query to the most mammoth task, we have all the answers. With us, you’re unstoppable.
                            </p>
                            <button
                                className="btn btn-primary btn-lg"
                                data-bs-toggle="modal"
                                data-bs-target="#enroll"
                            >
                                Join our Community
                            </button>
                        </div>
                        <div className="col-md">
                             <img
                            className="img-fluid d-sm-block"
                            src={HeaderImg}
                            alt=""
                        />
                        </div>
                    </div>
                </div>
            </section>




            




            <section className="bg text-dark p-5" style={{backgroundColor:" #e3f2fd"}}>
                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

                        <div className="input-group news-input">
                            <input type="text" className="form-control" placeholder="Enter Email" />
                            <button className="btn btn-dark btn-lg" type="button" >Submit</button>
                        </div>
                    </div>
                </div>
            </section>





            <section id="learn" className="p-sm-5 py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md">
                            <img src={AboutImg} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md p-5">
                            <h2>Get down to the nitty-gritty of<span className="text-primary"style={{color:"rgb(84, 154, 210)"}}> Codificacion</span></h2>
                            <p className="lead">
                                Codificacion Circulo is a technical community that is the brainchild of a passionate group of college students who took up the responsibility to prepare young tech enthusiasts for the protean world of computing.
                            </p>
                            <p>
                                We came together to create a community where no one feels left out, and everyone gets the proper resources and guidance necessary at the start of college life.
                            </p>
                            <a href="/community" className="btn btn-light mt-3" style={{backgroundColor:" #e3f2fd"}}>
                                <i className="fas fa-chevron-right"></i> Explore Our Community
                            </a>
                        </div>
                    </div>
                </div>
            </section>




            <section class="p-sm-5 py-5 bg-light">
                <div class="container py-sm-4">
                    <div class="row justify-content-center text-center g-2">



                        <div class="col-md">
                        
                            <div class="lol mx-auto my-2" style={{ width: "20rem" }}>
                                <img
                                    src={OneImg}
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body text-center">

                                    <h3 class="card-title mb-3">Vision</h3>
                                    <p class="card-text">
                                    A buzzing tech hub to promote coding and technology among amateurs, professionals, and enthusiasts for a better future. We recognize the potential in you.

                                    </p>
                                    {/* <a href="www.google.com" class="btn btn-primary">Read More</a> */}
                                </div>
                            </div>
                        </div>




                        <div class="col-md">
                            <div class="lol mx-auto my-2" style={{ width: "20rem" }}>
                                <img
                                    src={TwoImg}
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body text-center">

                                    <h3 class="card-title mb-3">
Mission</h3>
                                    <p class="card-text">
                                    Providing an inclusive and progressive environment for people with a knack for coding and computing with ample quality resources and guidance. Together, we can create wonders.

                                    </p>
                                    {/* <a href="www.google.com" class="btn btn-primary">Read More</a> */}
                                </div>
                            </div>
                        </div>





                        <div class="col-md">
                            <div class="lol mx-auto my-2" style={{ width: "20rem" }}>
                                <img
                                    src={ThreeImg}
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body text-center">

                                    <h3 class="card-title mb-3">Value</h3>
                                    <p class="card-text">
                                    We value our members, respect their differences and appreciate their progress and achievements. Our community is a safe place for everyone. After all, we all bleed the same. 

                                    </p>
                                    {/* <a href="www.google.com" class="btn btn-primary">Read More</a> */}
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </section>






            <section id="learn" className="p-sm-5 py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md p-5">
                            <h2>Step into the world of exciting change and chase your dreams.</h2>
                            <p className="lead">
                                We solely aim to provide you with resources, guidance, equip you with skills, help you in your projects and competitions and build a strong portfolio. Welcome to an authentic place of learning and growing.
                            </p>
                            <a href="/team" className="btn btn-light mt-3" style={{backgroundColor:" #e3f2fd"}}>
                                <i className="fas fa-chevron-right"></i> Meet Our Team
                            </a>
                        </div>
                        <div className="col-md">
                            <img src={WhyImg} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>







        </Fragment>
    )
}

export default Home