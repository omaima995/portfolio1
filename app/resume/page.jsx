"use client"
import  { FaHtml5, FaCss3, FaJs,FaLaravel} from 'react-icons/fa'
import { SiTailwindcss, SiNestjs, SiMysql, SiPostgresql, SiPrisma } from 'react-icons/si';
import { DiZend } from "react-icons/di";
import { AiOutlinePython } from "react-icons/ai";
import { TbBrandNextjs,TbBrandAngular } from "react-icons/tb";
import { RiPoliceBadgeLine,RiBootstrapLine } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa6";
import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"
import {ScrollArea} from '@/components/ui/scroll-area'
import { motion } from 'framer-motion';
const about ={
  title:"About me",
  Description:
  "I am an experienced and professional web developer at Technology Travel Tourisme with two years of expertise. I specialize in designing and managing databases and possess strong skills in PHP, HTML, CSS, HTML5, and JavaScript for developing dynamic websites and applications",
  info:[
    {
      fildName :'Name',
      fieldValue:'Omaima Abdennadher',
    },
    {
      fildName :'Phone',
      fieldValue:'(+216) 27 323 003',
    },
    {
      fildName :'Experience',
      fieldValue:'2 Years',
    },
    {
      fildName :'Nationality',
      fieldValue:'Tunisian',
    },
    {
      fildName :'Email',
      fieldValue:'abdennadheroumaima@gmail.com',
    },
    {
      fildName :'Language ',
      fieldValue:'English, French, Arabic'
    },
  ]
}
const experience ={
  icon:<RiPoliceBadgeLine /> ,
  title:"My experience",
  description: "I have a diverse background with experience gained through various internships and my current role. Over the past two years, I have worked on multiple projects that involved designing and managing databases, as well as developing dynamic websites and applications. My professional journey has provided me with valuable insights and skills across different domains, allowing me to contribute effectively to various aspects of technology and web development.",
  items:[
    {
      company: "Technologie travel tourisme",
      position:"Full Stack Developer",
      duration:"01-2023 | Present",
    },
    {
      company: "Ooredoo",
      position:"Sales Advisor",
      duration:"01-2018 | 12-2023",
    },
    {
      company: "Djagora Academy",
      position: "Full Stack Developer Intern - End-of-Studies Engineering",
      duration:"03-2024 | 07-2024",
    },
    {
      company: "Media Center DEV",
      position:"Front-End Developer Intern",
      duration:"06-2024 | 07-2024",
    },
    {
      company: "Media Center DEV",
      position:"Back-End Developer Intern",
      duration:"03-2024 | 06-2024",
    },
    {
      company: "Telesys",
      position: "Intern (Android & Embedded Systems: Arduino)",
      duration:"01-2016 | 05-2016",
    },
    {
      company: "Electric and Technology Solutions",
      position:"Embedded Systems Intern",
      duration:"01-2015 | 02-2015",
    },
    {
      company: "Tunisie Telecoms",
      position:"Intern",
      duration:"01-2014 | 02-2014",
    },
  ]
}

const education ={
  icon:<FaGraduationCap />  ,
  title:"My Education",
  description: "I have pursued a comprehensive educational journey, starting with foundational studies and progressing through specialized engineering programs. This journey has equipped me with a broad understanding of technology and engineering principles, fostering both theoretical knowledge and practical skills. My education has been integral in developing a well-rounded expertise, preparing me for various roles and challenges in the technology sector.", 
   items:[
    
    {
      institution: "International Institute of Technology (IIT)",
      place: "Sfax, Tunisia",
      degree:"Diplome in Computer Engineering",
      duration:"01-2023 | Present",
    },
    {
      institution: "Higher Institute of Technological Studies (Iset)",
      place: "Sfax, Tunisia",
      degree:"Applied Diplome in Computer Technology",
      duration:"01-2023 | Present",
    },
    {
      institution: "Hedi Soussi High School",
      place: "Sfax, Tunisia",
      degree:"Technical Baccalaureate",
      duration:"01-2023 | Present",
    },
    
  ]
}
const skills= {
    title:"My skills",
    description: "I have a strong foundation in web development, encompassing a range of skills from designing and implementing dynamic and responsive websites to managing and optimizing web applications. My expertise includes creating user-friendly interfaces, ensuring cross-platform compatibility, and integrating backend systems to deliver seamless user experiences. I am adept at problem-solving, attention to detail, and continuously improving the functionality and performance of web applications.",
    skillList: [
     
      {
        icon:<FaJs/>,
        name: "js",
      },
      {
        icon:<DiZend />,
        name: "zend2",
      },
      {
        icon:<TbBrandNextjs />,
        name: "next.js",
      },
      {
        icon:<SiNestjs />,
        name: "nest.js",
      },
      {
        icon:<FaLaravel />,
        name: "Laravel",
      },
      {
        icon:<TbBrandAngular />,
        name: "Laravel",
      },
        
      {
        icon:<AiOutlinePython />,
        name: "Python",
      },
      {
        icon:<SiMysql />,
        name: "Mysql",
      },
      {
        icon:<SiPrisma />,
        name: "Prisma",
      },
      {
        icon:<SiPostgresql /> ,
        name: "Postgres",
      },
      {
        icon:<FaHtml5/>,
        name: "html5",
      },
      {
        icon:<FaCss3/>,
        name: "css",
      },
      {
        icon:<SiTailwindcss/>,
        name: "tailwind css",
      },
      {
        icon:<RiBootstrapLine />,
        name: "bootstrap",
      },
    


    ]
}

const Resume = () => {
    return (
      <motion.div
      initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4,duration:0.4, ease:"easeIn"},}}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
        <div className='container mx-auto'>
          <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
              <TabsList>
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience"   className="inline-flex items-center justify-center w-full xl:w-[380px] bg-[#27272c] whitespace-nowrap text-white rounded-lg p-3 text-balance font-medium">
                
                Experience
                </TabsTrigger>
                  <TabsTrigger value="education">Eduction </TabsTrigger>
                  <TabsTrigger value="Skills">Skills </TabsTrigger>
                  <TabsTrigger value="about">About me </TabsTrigger>
                </TabsList>
              </TabsList>
              <div className='min-h-[70vh] w-full'>
                <TabsContent  value="experience" className="w-full">
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{experience.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {experience.description}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                        {experience.items.map((item, index) => {
                          return (
                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                              <span className='text-accent-default'>{item.duration}</span>
                              <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                              <div className='flex items-center gap-3'>
                                <span className='w-[6px] h-[6px] rounded-full bg-accent-default'></span>
                                <p className='text-white/60'>{item.company}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>


                  </div>
                </TabsContent>
                <TabsContent  value="education" className="w-full">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{education.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {education.description}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                        {education.items.map((item, index) => {
                          return (
                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                              <span className='text-accent-default'>{item.degree}</span>
                              <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                              <div className='flex items-center gap-3'>
                                <span className='w-[6px] h-[6px] rounded-full bg-accent-default'></span>
                                <p className='text-white/60'>{item.institution}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>


                  </div>
                </TabsContent>
                <TabsContent value="Skills" className="w-full h-full">
              <div className='flex  flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>
                    {skills.title}
                  </h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] '>
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index} className="flex items-center gap-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group-[]:'>
                                  <div className='text-6xl group-hover:text-accent-default transition-all duration-300'>
                                    {skill.icon}

                                  </div>
                              </TooltipTrigger>
                              <TooltipContent>
                            <p className='captalize'>{skill.name}</p>
                          </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                                                  </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

                <TabsContent  value="about" className="w-full text-center xl:text-left">
                      <div className='flex flex-col gap-[30px]'>
                        <h3 className='text-4xl font-bold'>{about.title}</h3>
                        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.Description}</p>
                        <ul className='grid grid-cols-1 xl:grid-col-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                          {about.info.map((item,index)=>{
                            return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                              <span className='text-white/60'>{item.fildName}</span>
                              <span className='text-xl'>{item.fieldValue}</span>


                            </li>
                          })}
                        </ul>
                      </div>
                </TabsContent>
              </div>
          </Tabs>

        </div>
        </motion.div>
    )
  }
  
  export default Resume