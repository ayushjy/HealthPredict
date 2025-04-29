import React from "react";
import CountUp from "react-countup";

const HomeCircles = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-12">
        
        <div className="flex flex-col items-center">
          <CountUp
            start={0}
            end={1000}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={500}
          >
            {({ countUpRef }) => (
              <div className="text-4xl md:text-5xl font-bold text-purple-700 animate-fadeIn">
                <span ref={countUpRef} />+
              </div>
            )}
          </CountUp>
          <span className="text-lg md:text-xl text-gray-700 text-center mt-2">
            Satisfied <br /> Patients
          </span>
        </div>

        <div className="flex flex-col items-center">
          <CountUp
            start={0}
            end={250}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={500}
          >
            {({ countUpRef }) => (
              <div className="text-4xl md:text-5xl font-bold text-purple-700 animate-fadeIn">
                <span ref={countUpRef} />+
              </div>
            )}
          </CountUp>
          <span className="text-lg md:text-xl text-gray-700 text-center mt-2">
            Verified <br /> Doctors
          </span>
        </div>

        <div className="flex flex-col items-center">
          <CountUp
            start={0}
            end={75}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={500}
          >
            {({ countUpRef }) => (
              <div className="text-4xl md:text-5xl font-bold text-purple-700 animate-fadeIn">
                <span ref={countUpRef} />+
              </div>
            )}
          </CountUp>
          <span className="text-lg md:text-xl text-gray-700 text-center mt-2">
            Specialist <br /> Doctors
          </span>
        </div>

      </div>
    </section>
  );
};

export default HomeCircles;
