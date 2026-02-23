function SuccessCard({icon:Icon,title,text ,className ,content,icon2:Icon2 ,className2}){
    return(
      
           
            
            <div className="w-11/12 p-4 bg-white border shadow-xl hover:border-red-200 hover:scale-105 transition-all duration-500 hover:shadow-l translate-y-1 rounded-2xl  m-4 lg:w-3/4 mx-auto  ">
                <div className={className}>
                 
                {Icon}
            </div>
              
                
                <h2 className="text-2xl font-bold p-4 pb-2 ">{title}</h2>
                <p className="leading-relaxed font-thin  p-4 pt-2">{text}</p>
                <div  className="bg-red-100 rounded-lg flex p-4 gap-2 ">
                   
                    <div className={className2}>{Icon2}</div>
                    <p className="">{content}</p>
                    
                    </div>
                
            </div>
        
                    
        
    
        
        
       
        

    )
}
export default SuccessCard