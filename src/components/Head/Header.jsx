import Navbars from "./Navbars"
import Logo from "./Logo"
import Button from "./Buton"
import Modal from './Modal'
import { useState } from "react";




import { MdOutlineMenu } from "react-icons/md"
function Header(){
    
    const [showModal, setshowModal] = useState(false);

    return(
        <>
        <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            <div>
                 <Logo/>
            </div>
        
                    <nav className="text-blue-500 flex gap-4 hidden lg:block lg:flex lg:gap-4 ">
                        <Navbars className='hover:text-red-500 ' label = "Home" href = "/"/>
                        <Navbars className='hover:text-red-500 ' label = "Story" href = "/Story"/>
                        <Navbars className='hover:text-red-500 '  label = "Research" href = "/Research"/>
                        <Navbars className='hover:text-red-500 ' label = "Team" href = "/Team"/>
                        <Navbars className='hover:text-red-500 ' label = "Contact" href = "/Contact"/>
                    </nav>

            

                   <Button 
                   
                    text="Donate" 
                    className="bg-white-500 text-yellow-600 w-32 rounded-lg  border-2 border-yellow-600  text-sm  hover:text-white hover:bg-yellow-600 hidden lg:block lg:p-2"
                
                    />
                    

                   <Button 
                        onClick ={()=> setshowModal(true)}
                        text="Login" 
                        className="bg-red-500 text-white w-20 rounded-lg p-2 text-sm hidden lg:block "
                         
                 />
                 <Modal isVisible={showModal} onClose={()=>setshowModal(false)}/>
                   <MdOutlineMenu   className="text-4xl lg:hidden "/>
                   <nav className="text-white grid mt-64 bg-gray-500 p-6 gap-4  lg:hidden hidden ">
                        <Navbars label = "Home" href = "/"/>
                        <Navbars label = "About" href = "/About"/>
                        <Navbars label = "Story" href = "/Story"/>
                        <Navbars label = "Research" href = "/Research"/>
                        <Navbars label = "Team" href = "/Team"/>
                        <Navbars label = "Contact" href = "/Contact"/>
                    </nav>
                
            
        </div>
       



        </header>
        
        </>

    )
}
export default Header