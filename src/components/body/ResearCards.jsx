function ResearchCards({icon:Icon, school,lab,text,partner1,partner2,partner3,className,className2,className3}){
    return(
        <div className="w-11/12 p-4 bg-white border shadow-xl hover:border-red-200 hover:scale-105 transition-all duration-500 hover:shadow-l translate-y-1 rounded-2xl  m-4 lg:w-3/4 mx-auto  ">
                <div className={className}>
                    {Icon}
                </div>
                 
                <div className="text-center mb-10">
                    <h2 className="text-xl font-bold p-4 pb-2 leading-tight ">{school}</h2>
                    <p className={className2}>{lab}</p>
                    
                </div>

                <p className="font-light mb-4  ">{text}</p>

                <div className={className3}>
                    <p className="bg-red-100/50 rounded-full px-2 py-1 ">{partner1}</p>
                    <p className="bg-red-100/50 rounded-full px-2 py-1 ">{partner2}</p>
                    <p className="bg-red-100/50 rounded-full px-2 py-1">{partner3}</p>


                </div>
                
                    
        </div>
                

    )

}
export default ResearchCards