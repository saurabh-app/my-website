import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-50">
    {/* Hero Section */}
    <section className="bg-white-600 text-blue-600 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Saurabh Kumar Yadav
        </h1>
        <p className="text-lg md:text-xl mb-8">
        A **Full-Stack Developer** is skilled in both the front-end (what users see) and back-end (the server-side functionality) of web applications. They build complete web experiences by combining technologies like HTML, CSS, and JavaScript for the front-end, and programming languages like Node.js, Python, or Java for the back-end. A passionate full-stack developer not only writes code but also ensures a seamless, beautiful, and user-friendly experience. They manage both the server and client-side of an application, integrating them through APIs, and are proficient in tools like Git for version control and platforms like AWS for deployment.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
        >
          Get in Touch
        </a>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Mobile Application Development</h3>
            <p>
              Building and integrating RESTful APIs for seamless application
              performance.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p>
              Crafting responsive and efficient web applications using modern
              frameworks.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p>
              Designing user-friendly and visually appealing interfaces for
              web and mobile.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">API Integration</h3>
            <p>
              Building and integrating RESTful APIs for seamless application
              performance.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Profile"
              className="rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p>
              I'm a software developer with a passion for creating elegant
              solutions to complex problems. I specialize in JavaScript,
              React, Node.js, and Python.
            </p>
            <a
              href="#projects"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-8">
          Interested in working together? Reach out to me via email or
          connect on social media!
        </p>
        <a
          href="mailto:youremail@example.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
        >
          Email Me
        </a>
      </div>
    </section>
  </div>
  );
};

export default MainLayout;
