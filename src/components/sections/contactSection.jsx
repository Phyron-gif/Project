import { MdOutlineEmail, MdOutlineLocationOn, MdOutlinePublic} from "react-icons/md"


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
            icon:<MdOutlinePublic/>
        },
        {
            title:'Headquaters',
            text:['Kigali,Rwanda ' ,'Continental Hubs: Cameroon, Ghana, Rwanda, South Africa, Morocco'],
            icon:<MdOutlineLocationOn/>
        },
        









    ]
    return(
        <>
         <div className=' mb-16  mt-2   p-2  lg:text-center grid justify-center  ' >
           
                    <h1 className='text-4xl mt-7 text-center leading-tight font-bold'>Get In Touch</h1>
                    <p className=' p-6 font-thin text-lg leading-normal text-center lg:w-3/4  lg:mx-auto'>Interested in collaborating or learning more about our research? We'd love to hear from you.

                    </p>
        </div>
         <div className='grid lg:grid-cols-2 lg:justify-center-right  '>
        
            <div className="   m-4 lg:mx-auto ">
                <h2 className=' m-4  font-bold text-lg  mb-10 '>Contact Information</h2>



               
                
                    {info.map((item,index)=>{
                        return(
                            <div className=" m-4 bg-white flex gap-4 p-4  border rounded-lg shadow-lg hover:scale-105 hover:shadow-lg translate-y-1 transition-all duration 300 " key={index}>
                                
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
         <div className='mb-96 '>
                        <h2 className='m-4 p-6 font-bold text-lg'> Send Us a Message</h2>
            <form className='grid gap-4 border rounded-lg  p-6 shadow-lg m-4 lg:w-3/4 '> 
            <div className='flex justify-between gap-2'>
                
                  <input className = 'border p-2 w-2/3 rounded-lg border-gray-300 focus:border-red-300 focus:outline-none'    type="text" placeholder='Your Name'/>
                    <input className = 'border p-2 w-2/3 rounded-lg border-gray-300 focus:border-red-300 focus:outline-none'    type="password" placeholder='Your Email'/>
                    </div>
                      <input className = 'border p-2 rounded-lg border-gray-300 focus:border-red-300 focus:outline-none'    type="password" placeholder='Subject'/>
                      <textarea className ='p-2 border border-2 rounded-lg h-[150px] focus:border-red-300 focus:outline-none' name="" id="" placeholder='Your Message'></textarea>
                
            </form>
        </div>

         



        </div>
        
        
        
        </>
       
    )

}
export default ContactSection
