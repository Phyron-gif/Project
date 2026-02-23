
 
function ImpactCard(){
    const data = [
        
            {number:"10", text:"Founding Fellows"},
             {number:"250+", text:"Pages Research"},
             {number:"5", text:"Continental Hubs"} 
    ];
   
    
    return(
      
            <div className="w-11/12  bg-red-100/40 border-2 border-red-200  rounded-2xl  m-4 lg:w-3/4 mx-auto ">
                <h1 className="text-3xl font-bold text-center mt-10">Our Impact</h1>
                <div className=" lg:flex lg:justify-around  "> 
                    
            
                    {data.map((item,index) => {
                        return(
                            <div className=" text-center font-bold m-10 hover:scale-105 hover:translate-y-1  transition-all duration-300 " key={index}>
                            <h1 className=" text-4xl text-red-700 ">{item.number}</h1>
                            <p className="font-light text-sm">{item.text}</p>
                             </div>)

                        })


                        }
                </div>
               

            </div>
        
     
    )


}
export default ImpactCard