import Button from "../Head/Buton"

function NetworkCard({title,text}){
    return(
           <div className="w-11/12 p-4 bg-white border shadow-xl hover:border-red-200 hover:scale-105 transition-all duration-500 hover:shadow-l translate-y-1 rounded-2xl  m-4 lg:w-1/2 mx-auto lg:grid lg:justify-center mb-32 ">
               
              
                
                <h2 className="text-2xl font-bold p-4 pb-2 text-center ">{title}</h2>
                <p className="leading-relaxed font-thin  p-4 pt-2 text-center">{text}</p>
                <div className="grid justify-center  lg:flex  lg:item:center lg:gap-4 mx-auto">
                <Button  text='Apply for Fellowship' className="mt-4  p-4 bg-red-700 border border-white rounded-lg text-white font-bold hover:scale-105 duration-300  w-52 "/>
                 <Button text='Meet Our Team' className="mt-4  p-4 bg-white border-2 border-red-700 rounded-lg text-red-700 font-bold hover:scale-105  duration-300  w-48  mx-auto"/>
                
                </div>
                
            
                
            </div>

    )

}
export default NetworkCard
 