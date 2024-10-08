import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

const Social = () => {
       
    const socialLinks = [{link:"https://github.com/amjadraza19", icon:IconBrandGithub}, {link:"www.linkedin.com/in/md-amjad-raza-836b7a256", icon:IconBrandLinkedin}, {link:"https://www.instagram.com/raza_amjad786/", icon:IconBrandInstagram}, {link:"https://x.com/MDAMJAD96490293", icon:IconBrandTwitter}, {link:"https://leetcode.com/u/amjad1912/", icon:IconBrandLeetcode},];

    const sociaIcons=socialLinks.map((socialLink)=>{
        return <a href={`${socialLink.link}`} target="_blank" className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
           
           <div data-aos="fade-up-left" data-aos-duration="800" > <socialLink.icon className="-rotate-90" size={30} /> </div>
     
     </a>
    })

    return <div className="flex md-mx:hidden text-headerText items-center gap-10 fixed bottom-44 -left-48 lg:-left-52 rotate-90">
        {sociaIcons}
        <hr className="border-[1px] w-40 rounded-full bg-textColor border-textColor"/>
    </div>
}
export default Social;