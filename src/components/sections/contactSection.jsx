import { MdOutlineEmail, MdOutlineLocationOn, MdOutlineNetworkLocked, MdOutlineWebStories } from "react-icons/md"

function ContactSection(){

    const info =[
        {
            title:'Email',
            text:['info@palaverinstitute.org'],
            icon:<MdOutlineEmail/>
        },
        {
            title:'Website',
            text:['palaverinstitute.org'],
            icon:<MdOutlineNetworkLocked/>
        },
        {
            title:'Headquaters',
            text:['Kigali,Rwanda ' ,'Continental Hubs: Cameroon, Ghana, Rwanda, South Africa, Morocco'],
            icon:<MdOutlineLocationOn/>
        }







    ]
    return(
        <>
         <div className=' mb-10 mt-2   p-3  lg:text-center grid justify-center ' >
           
                    <h1 className='text-4xl mt-7 text-center leading-tight font-bold'>Get In Touch</h1>
                    <p className=' p-6 font-thin text-lg leading-normal text-center lg:w-3/4  lg:mx-auto'>Interested in collaborating or learning more about our research? We'd love to hear from you.

                    </p>
        </div>
        <div>
            <div className=" mb-96 grid justify-center">

                
                    {info.map((item,index)=>{
                        return(
                            <div className=" m-4 md:max-w-lg lg:max-w-xl bg-white flex gap-4 p-6 border rounded-lg shadow-lg hover:scale-105 hover:shadow-lg translate-y-1 transition-all duration 300" key={index}>
                              <div className="">
                                <p className="text-3xl text-red-600 bg-red-100/50 rounded-lg p-3">{item.icon}</p>
                                </div>
                            <div>
                                <p> {item.title}</p>
                               <div className="font-thin ">
                                {item.text.map((item,index)=>{

                                  return  <div key={index}>
                                       <p> {item}</p>

                                    </div>
                                    
                                })}
                                
                                </div>
                            </div>
                               
                                
                                
                                </div>
                            
                               
                            
                            

                            
                        )



                    })}
                

         </div>



        </div>
        </>
       
    )

}
export default ContactSection
