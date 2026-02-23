function InfoCards({icon:Icon,title,text ,className,className2 }){
    return(
      
           
            
            <div className={className2}>
                <div className={className}>
                 
                {Icon}
            </div>
              
                
                <h2 className="text-2xl font-bold p-4 pb-2 ">{title}</h2>
                <p className="leading-relaxed font-thin  p-4 pt-2">{text}</p>
                
                    
                    </div>
                
            
        
                    
        
    
        
        
       
        

    )
}
export default InfoCards
