import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";

import React from "react";

const Hero = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/*hero left content  */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600]
                text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px]"
            >
              I'm Isadia Nzuma <br />
              Software Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2 
                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-line"></i>Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b 
                border-solid border-smallTextColor"
              >
                See portfolio
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 mt-14  text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 
              sm:pr-10"
            >
              <span>
                <i class="ri-apps-line"></i>
              </span>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Sociosqu
              senectus turpis cursus nullam finibus magna felis. Fermentum
              libero velit eros quisque taciti habitant; in egestas. Ut
              scelerisque turpis fusce sapien dapibus neque lectus
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="#x"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-twitter-x-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="#linkedin"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#github"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/*hero left content  */}
          {/* hero img */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/* hero img */}
          {/* content */}
          <div
            className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
          md:flex-col md:justify-end md:text-end"
          >
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={13} duration={3} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Months of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={6} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={98} duration={3} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success rate
              </h4>
            </div>
          </div>
          {/* content */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
