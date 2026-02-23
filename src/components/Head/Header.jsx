import Navbars from "./Navbars"
import Logo from "./Logo"
import Button from "./Buton"




function Header(){
    return(
        <>
        <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            <div>
                 <Logo/>
            </div>
        
                    <nav className="text-blue-500 flex gap-4 hidden lg:block lg:flex lg:gap-4">
                        <Navbars label = "Home" href = "/"/>
                        <Navbars label = "About" href = "/About"/>
                        <Navbars label = "Story" href = "/Story"/>
                        <Navbars label = "Research" href = "/Research"/>
                        <Navbars label = "Team" href = "/Team"/>
                        <Navbars label = "Contact" href = "/Contact"/>
                    </nav>

            

                   <Button 
                    text="Get Involved" 
                    className="bg-white-500 text-orange-300 w-32 rounded-lg  border-2 border-orange-300  text-sm  hover:text-white hover:bg-orange-300 hidden lg:block lg:p-2"
                
                    />

                   <Button 
                        
                        text="Login" 
                        className="bg-red-500 text-white w-20 rounded-lg p-2 text-sm hidden lg:block "
                         
                 />
            
        </div>



        </header>
        
        </>

    )
}
export default Header