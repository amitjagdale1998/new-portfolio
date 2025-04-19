import React, { useState } from "react";
import "./CommonStyle.css";
import IconCss from "../icons/IconCss";
import IconExpress from "../icons/IconExpress";
import IconHtml from "../icons/IconHtml";
import IconVue from "../icons/IconVue";
import IconNode from "../icons/IconNodejs";
import IconTailwind from "../icons/IconTailwind";
import IconReact from "../icons/IconReact";
import IconJAvascript from "../icons/IconJavascript";
import IconGit from "../icons/IconGit";

function Home() {
  const [reload, setReload] = useState(false);
  function Reload() {
    IconReact;
    setReload(true);
    location.reload();
  }
  return (
    <div className=" p-4  first-page demo-1   justify-center  text-center w-full  ">
      <div className="font-extrabold text-3xl text-blue-50">
        &lt;
        <span className="cursor-pointer" onClick={Reload}>
          AmitJagdale
        </span>
        /&gt;
        {reload && (
          <span className="cursor-pointer">onClick=&#10627;Reload&#10628;</span>
        )}
      </div>

      <div class="font-sans text-gray-800 max-w-3xl mx-auto px-6 py-8">
        <h1 class="text-4xl font-bold text-blue-900 mb-4">
          Hi, I’m <span class="text-blue-500">Amit Jagdale</span>
        </h1>

        <p class="text-lg text-white leading-relaxed mb-6">
          A passionate{" "}
          <span class="text-blue-500 font-semibold">Full Stack Developer</span>{" "}
          with{" "}
          <span class="text-green-600 font-semibold">
            2 years of experience
          </span>{" "}
          in building clean, responsive, and pixel-perfect web applications. I
          specialize in creating seamless user experiences by combining my
          expertise in frontend development with backend functionality. From
          designing intuitive interfaces to building robust server-side logic, I
          bring creativity and technical precision to every project.
        </p>

        <h2 class="text-3xl font-bold text-blue-900 mt-8 mb-4">What I Do:</h2>
        <ul class="  text-lg text-gray-400 space-y-2 mb-6">
          <li>
            Develop{" "}
            <span class="text-blue-500 font-semibold">
              clean, maintainable, and efficient code
            </span>{" "}
            for both frontend and backend.
          </li>
          <li>
            Create{" "}
            <span class="text-blue-500 font-semibold">
              pixel-perfect designs
            </span>{" "}
            that align with the latest UI/UX trends.
          </li>
          <li>
            Enhance websites with{" "}
            <span class="text-blue-500 font-semibold">
              dynamic web animations
            </span>{" "}
            to make them more engaging and interactive.
          </li>
          <li>
            Build{" "}
            <span class="text-blue-500 font-semibold">
              scalable and performant backend systems
            </span>{" "}
            to support frontend functionality.
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-3xl font-bold text-blue-900 mt-8 mb-4">
          Technologies I Work With:
        </h2>
        <div className="h-fit border border-white items-center rounded flex flex-col md:flex-row justify-between p-2 mb-2">
          <div className="flex flex-col items-center justify-center w-full  md:w-auto">
            <div className="text-white flex gap-2  items-center ">
              <IconReact /> React
            </div>
            <div>
              "I am proficient in React, a powerful JavaScript library for
              building dynamic and responsive user interfaces. With a strong
              understanding of core concepts like components, state management,
              hooks, and JSX, I can create efficient and reusable UI elements. I
              have experience working with React Router for navigation,
              integrating APIs for data fetching, and optimizing performance
              using techniques like memoization and lazy loading. My ability to
              write clean, maintainable code and my familiarity with modern
              tools like Redux and Context API make me confident in delivering
              high-quality web applications."
            </div>
          </div>
          <div className="border-l border-white w-auto mx-2 justify-center   "></div>
          <div className="flex flex-col  items-center justify-center w-full md:w-auto">
            <div className="text-white flex gap-2  items-center justify-center">
              <IconVue /> Vue.js
            </div>
            <div>
              "I am skilled in Vue.js, a versatile JavaScript framework for
              building modern and interactive web applications. With expertise
              in core concepts like components, directives, reactivity, and the
              Composition API, I can develop scalable and maintainable user
              interfaces. I have experience using Vue Router for seamless
              navigation, Vuex for state management, and integrating APIs to
              fetch and manage data. My ability to write clean, modular code and
              my familiarity with tools like Pinia and Vite enable me to deliver
              efficient and high-performing applications."
            </div>
          </div>
        </div>

        <div className="h-fit border border-white rounded items-center flex flex-col md:flex-row justify-between p-2 mb-2">
          <div className="flex flex-col items-center justify-center w-full md:w-auto">
            <div className="text-white flex gap-2  items-center justify-center">
              <IconNode /> Express.JS
            </div>
            <div>
              "I am proficient in Express.js, a fast and minimalist Node.js
              framework, which I use to build robust and scalable backend
              systems. With expertise in creating RESTful APIs, handling
              middleware, and managing routing, I ensure seamless communication
              between the frontend and server. I have experience integrating
              Express.js with databases like MongoDB and MySQL, implementing
              authentication (e.g., JWT, OAuth), and optimizing performance
              through efficient error handling and caching. My ability to design
              secure, maintainable, and high-performance backend solutions makes
              me confident in delivering reliable web applications."
            </div>
          </div>
          <div className="border-l border-white w-auto justify-center   "></div>
          <div className="flex flex-col  items-center justify-center w-full md:w-auto">
            <div className="text-white flex gap-2  items-center justify-center">
              <IconJAvascript /> Javascript
            </div>
            <div>
              "I am skilled in Vue.js, a versatile JavaScript framework for
              building modern and interactive web applications. With expertise
              in core concepts like components, directives, reactivity, and the
              Composition API, I can develop scalable and maintainable user
              interfaces. I have experience using Vue Router for seamless
              navigation, Vuex for state management, and integrating APIs to
              fetch and manage data. My ability to write clean, modular code and
              my familiarity with tools like Pinia and Vite enable me to deliver
              efficient and high-performing applications."
            </div>
          </div>
        </div>

        <div className="h-fit border border-white rounded flex flex-col md:flex-row justify-between p-2 mb-2">
          <div className="flex flex-col items-center justify-center w-full md:w-auto">
            <div className="text-white flex gap-2  items-center">
              <IconHtml /> Html
            </div>
            <div>
              I am highly skilled in HTML, the core markup language for building
              the structure and content of web pages. With a strong
              understanding of semantic HTML, I create well-organized and
              accessible web layouts that enhance user experience and SEO. I
              have experience integrating HTML with modern frameworks and tools,
              ensuring compatibility across browsers and devices. My ability to
              write clean, maintainable, and standards-compliant code allows me
              to build responsive and interactive interfaces that serve as a
              solid foundation for dynamic web applications.
            </div>
          </div>
          <div className="border-l border-white w-auto mx-2 justify-center   "></div>
          <div className="flex flex-col  items-center justify-center w-full md:w-auto">
            <div className="text-white flex gap-2  items-center">
              <IconCss /> Css/Tailwind
            </div>
            <div>
              I am proficient in CSS, the styling language used to design
              visually appealing and responsive web interfaces. With expertise
              in concepts like Flexbox, Grid, animations, and media queries, I
              create seamless and adaptive layouts for all screen sizes.
              Additionally, I am skilled in Tailwind CSS, a utility-first
              framework that enables rapid and consistent UI development. My
              experience includes building custom designs, optimizing
              performance, and ensuring maintainability by leveraging Tailwind's
              utility classes and responsive design features. This combination
              allows me to deliver modern, scalable, and user-friendly web
              applications.
            </div>
          </div>
        </div>

        <div className="h-fit border border-white rounded flex flex-col md:flex-row justify-between p-2 mb-2">
          {/* <div className="flex flex-col items-center justify-center w-full md:w-auto">
            <div className="text-white flex gap-2  items-center">
              <IconHtml /> Html
            </div>
            <div>
              I am highly skilled in HTML, the core markup language for
              building the structure and content of web pages. With a strong
              understanding of semantic HTML, I create well-organized and
              accessible web layouts that enhance user experience and SEO. I
              have experience integrating HTML with modern frameworks and tools,
              ensuring compatibility across browsers and devices. My ability to
              write clean, maintainable, and standards-compliant code allows me
              to build responsive and interactive interfaces that serve as a
              solid foundation for dynamic web applications.
            </div>
          </div> */}
          {/* <div className="border-l border-white w-auto mx-2 justify-center   "></div> */}
          <div className="flex flex-col  items-center justify-center w-full md:w-auto">
            <div className="text-white flex gap-2  items-center">
              <IconGit className=" bg-white" /> Git/GithHub
            </div>
            <div>
              I am proficient in using GitHub for version control and
              collaborative software development. With experience in managing
              repositories, creating branches, and handling pull requests, I
              ensure efficient code collaboration and project tracking. I am
              skilled in using GitHub Actions for CI/CD pipelines, automating
              workflows, and deploying applications seamlessly. My ability to
              maintain clean commit histories, resolve merge conflicts, and
              contribute to open-source projects demonstrates my expertise in
              leveraging GitHub to streamline development processes and deliver
              high-quality code.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
