import React from "react";
import "../App.css";
import { motion } from "framer-motion";

export default function Projects() {
  let id = 0;
  let Projects = [
    {
      title: "BlueeBerry",
      description:
        "An E-commerce website with multiple pages technology used is Next.js , Sanity and Clerk.",
      id: id++,
      url: "https://blueeberry.vercel.app/",
    },
    {
      title: "ShareBook",
      description:
        "A post sharing platform build with React.js , Appwrite and Tailwind CSS.",
      id: id++,
      url: "https://blog-share-book.vercel.app/",
    },
    {
      title: "Dynamic Resume Builder",
      description: "A Resume builder that build resume in minutes",
      id: id++,
      url: "https://resumemaker-abdullah.vercel.app/",
    },
    {
      title: "Smart MarkSheet",
      description:
        "The Smart Marksheet Platform is an innovative, web-based solution designed to streamline the distribution and verification of academic marksheets. Built with modern web technologies like Next.js. The platform offers a fast, secure, and responsive experience for students, parents, and educators.",
      id: id++,
      url: "https://smart-marksheet-qa18.vercel.app/std/marksheet/1456",
    },
    {
      title: "TODO Application",
      description:
        "A React-based task manager edit ,delete and completed Features",
      id: id++,
      url: "https://daily-todo-mu.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React.js and Tailwind CSS.",
      id: id++,
      url: "/",
    },
  ];
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-6 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400"
      >
        Projects
      </motion.h2>{" "}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {Projects.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.2 }}
            key={index}
            className="overflow-hidden group animate-fade-in bg-slate-100  dark:bg-slate-800 transition-colors duration-300"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* <a href={project.url} target="_blank" > */}
            <div
              id="CardHeader"
              className=" flex p-4 rounded-t-lg  bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-700 dark:to-blue-800"
            >
              <div>
                <div id="CardTitle" className="text-white text-2xl font-medium">
                  {project.title}
                </div>
                <div id="CardDescription" className="text-teal-100">
                  {project.description}
                </div>
              </div>
              <div className=" w-2/12">
                <a href={project.url} target="_blank">
                  <button className="rounded-xl bg-transparent text-white p-1">
                    Demo
                  </button>
                </a>
              </div>
            </div>
            <div id="CardContent" className="p-0 h-72">
              <div className={`projectImg${project.id} `}>
                {console.log(project.id)}
              </div>
            </div>
            {/* </a> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
