"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Skilled in developing dynamic and responsive websites using PHP, JavaScript, HTML, Bootstrap, and modern frameworks like Next.js, NestJS, and Tailwind CSS. Strong expertise in building scalable applications, with foundational knowledge in Python and .NET for backend development.',
    href:''
  },
  {
    num: '02',
    title: 'Certified ISTQB Testing',
    description: 'Certified in ISTQB Foundation Level, equipped with a strong understanding of software testing principles, techniques, and methodologies.',
    href:''
  },
  {
    num: '03',
    title: 'Certified Big Data Solutions',
    description: 'Certified in IBM Big Data Foundations, knowledgeable in Big Data concepts, tools, and technologies for data-driven decision-making.',
    href:''
  },
  {
    num: '04',
    title: 'Logo Design',
    description: 'Crafting unique and memorable logos that align with brand identity, utilizing creative tools to deliver professional and visually impactful designs.',
    href:''
  }
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className="flex flex-col h-full justify-between gap-6 group p-6 bg-gray-800 rounded-lg"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent
                    group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[50px] h-[50px] rounded-full bg-white
                    group-hover:bg-accent-default transition-all duration-500
                    flex justify-center items-center hover:rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white
                  group-hover:text-accent-default transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60 flex-grow">
                  {service.description}
                </p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
