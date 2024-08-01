import React from "react";
import Layout from "../layout";
// import Slider from "../slider/slider";
// import startupPng from "../../Assets/startup.png";
// import OurExperts from '../OurExperts'
// import Testimonials from '../Testimonials'
import { Link } from "react-router-dom";
// import abouut from "../../Assets/logo/abouut.jpg";
// const ButtonArrow = () => {
//   return (
//     <svg
//       className="size-5 rtl:rotate-180"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M17 8l4 4m0 0l-4 4m4-4H3"
//       />
//     </svg>
//   );
// };

function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold">
              Fast. Focused. Future-Proof. Your Skills Upgrade Starts Here with
              Tutorshour
            </h1>
            <p className="mt-4 text-xl">The Learning Landscape is Evolving.</p>
            <Link
              to={"/training"}
              className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            {/* <p className="mt-4 text-gray-600">
              We offer amazing features that will help you to build a great
              website.
            </p> */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">
                  We're the Architects of Your Skill Journey.
                </h3>
                <p className="mt-4 text-gray-600">
                  Our team of industry veterans and learning experts curate a
                  dynamic library of online courses designed for speed and
                  impact. We understand your time is valuable, so we offer
                  microlearning modules that allow you to master in-demand
                  skills on-the-go.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">
                  Learning Made Memorable.
                </h3>
                <p className="mt-4 text-gray-600">
                  Forget about dry lectures and information overload. Our
                  courses are crafted to be engaging and interactive. We
                  leverage cutting-edge technologies like simulations,
                  gamification, and AI-powered assessments to create a truly
                  immersive learning experience.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">
                  More Than Just Courses.
                </h3>
                <p className="mt-4 text-gray-600">
                  We believe in fostering a supportive learning environment.
                  Connect with fellow learners in our vibrant online community,
                  ask questions directly from our instructors, and gain valuable
                  insights from industry experts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <Slider /> */}
    </Layout>
  );
}

export default Home;
