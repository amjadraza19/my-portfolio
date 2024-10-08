const Mail = () => {
    return <div className="flex md-mx:hidden text-headerText items-center gap-10 fixed bottom-40 -right-44 lg:-right-52 rotate-90">
         <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
        <a href="mailto: amjadraza1912@gmail.com" className="text-lg font-mono tracking-widest hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
           amjadraza1912@gmail.com  
        </a>
        </div>
        <hr className="border-[1px] w-40 rounded-full bg-textColor border-textColor"/>
    </div>
}
export default Mail;