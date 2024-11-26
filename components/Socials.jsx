"use client"
import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram,FaFacebook,FaGitlab} from "react-icons/fa"
const Social =[
    {icon: <FaGitlab />,
     path:'https://gitlab.com/omaima2'
    },
    {icon: <FaLinkedinIn />,
        path:'https://www.linkedin.com/in/omaima-abdennadher-006b18243/'
       },
       {icon: <FaFacebook />,
        path:'https://www.facebook.com/omaima.abdennadher.50'
       },
       {icon: <FaInstagram />,
        path:'https://www.instagram.com/omaimaabdennadher/'
       },
       {icon: <FaYoutube />,
        path:''
       },  
];

const Socials = ({containerStyles , iconStyles}) => {
  return (
    <div className={containerStyles}>
        {Social.map((item,index)=> {
            return(
                <Link Key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
    
            )
        })

        }
       
    </div>
  )
}

export default Socials