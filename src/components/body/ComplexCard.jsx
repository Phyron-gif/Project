function ComplexCard({icon:Icon, title, content1,content2,className ,content3,content4 }){
    return(

          <div className="w-11/12 p-4 bg-white border shadow-xl hover:border-red-200 hover:scale-105 transition-all duration-500 hover:shadow-l translate-y-1 rounded-2xl  m-4 lg:w-3/4 mx-auto  ">
                <div className={className}>
                 
                {Icon}
            </div>
              
                
                <h2 className="text-2xl font-bold p-4 pb-2 ">{title}</h2>
                <div className=" font-thin  p-4 ml-4 shadow-l shadow-[-3px_0px_0_rgb(239,68,68)] rounded-xl bg-red-100/40">
                    <p className="text-red-700 text-sm font-bold" >{content1}</p>
                    <p className="text-sm leading-relaxed">{content2}</p>
                    </div>

                    <div className=" font-thin p-4 pt-2 ml-4 shadow-l rounded-xl bg-yellow-100/20 mt-3 shadow-[-3px_0px_0_rgb(161,98,7,0.9)]">
                    <p className="text-yellow-700/90 text-sm font-bold" >{content3}</p>
                    <p className="text-sm leading-relaxed">{content4}</p>
                    </div>


                
            </div>
    )


}
export default ComplexCard