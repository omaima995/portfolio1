"use client"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import{Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import {motion} from "framer-motion"  
 const info =[
    {
      icon:<FaPhoneAlt />,
      title:"Phone",
      description:"(+216) 27 323 003"
    },
    {
      icon:<FaEnvelope />,
      title:"Email",
      description:"abdennadheroumaima@gmail.com"
    },
    {
      icon:<FaMapMarkerAlt />,
      title:"Address",
      description:"Sidi Mansour Sfax , 3064"
    },
  ]
const Contact = () => {
    return (
      <motion.section
      initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="py-6">
            <div className="container mx-auto">
              <div className="flex flex-col xl:flex-row gap-[30px]">
                <div className="xl:w-[54%] order-2 xl:order-none"> 
                  <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                    <h3 className="text-4xl text-accent-default">Let's work together</h3>
                    <p className="text-white/60">
                    I'm a computer engineer with strong experience in web development, database management, and software design. I’m passionate about problem-solving and delivering high-quality solutions, and I’m ready to contribute my skills to help your team succeed.
                    </p>
                    <div className="grid drid-cols-1 md:grid-cols-2 gap-6">
                      <Input type ="firstname" placeholder="Firstname" />
                      <Input type ="lastname" placeholder="Lastname" />
                      <Input type ="eamil" placeholder="Email adress" />
                      <Input type ="phone" placeholder="Phone number" />
                    </div>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>
                            Select a service
                          </SelectLabel>
                          <SelectItem value="est">Web Development</SelectItem>
                          <SelectItem value="cst">Certified ISTQB Testing</SelectItem>
                          <SelectItem value="mst">Certified Big Data Solutions</SelectItem>
                          <SelectItem value="dst">Logo Design</SelectItem>

                        </SelectGroup>
                      </SelectContent>

                    </Select>
                    <Textarea className="h-[200px]" 
                    placeholder="Type your message here."
                    />
                    <Button size="md" className="max-w-40">Send message</Button>

                  </form>
                </div>
                <div className="flex-1 flex items-center  xl:order-none order-1 mb-8 xl:mb-0">
                  <ul className="flex flex-col gap-10">
                    {info.map((item,index)=>{
                      return(
                        <li key={index} className="flex items-center gap-6">
                          <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent-default rounded-md flex items-center justify-center">
                            <div className="text-[28px]">{item.icon}</div>
                          </div>
                          <div className="flex-1">
                            <p className="text-white/60">{item.title}</p>
                            <h3 className="tewt-xl">{item.description}</h3>
                          </div>
                        </li>
                      )
                        
                      
                    })}
                    </ul>
                </div>
              </div>
            </div>
        
        </motion.section>
    )
  }
  
  export default Contact