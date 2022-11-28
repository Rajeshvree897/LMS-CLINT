
import React from 'react';
import AboutIMG from '../assets/img/about.jpg';
function Main() {
  return (
    <>
      <section id="hero" className="d-flex justify-content-center align-items-center">
        <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
        <h1>Learning Today,<br />Leading Tomorrow</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <a href="courses.html" className="btn-get-started">Get Started</a>
        </div>
      </section>
      <main id="main">
      <section id="about" className="about">
      <div className="container" data-aos="fade-up">

          <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
              <img src={AboutIMG} className="img-fluid" alt="" />
          </div>
          
          </div>

      </div>
      </section>
      </main>
    </>
  );

}

export default Main;



