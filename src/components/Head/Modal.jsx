 const Modal= ({isVisible,onClose})=> {
    if (!isVisible){
        return null
    }
    
    return(
        <div className='fixed mt-16 inset-0 bg-black  bg-opacity-25 backdrop-blur flex justify-center items-center'>
        <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col'>
        <button onClick={()=> onClose()} className='text-white text-xl place-self-end'>x</button>
        <div className='bg-white p-2'>
            <form  className='p-4 flex flex-col gap-6 ' action="">
                <input className = 'border p-2 rounded-lg focus:border-red-300 focus:outline-none' type="text" placeholder='Email'/>
                  <input className = 'border p-2 rounded-lg border-gray-300 focus:border-red-300 focus:outline-none'    type="password" placeholder='Password'/>
                  <div className='flex justify-between'>
                  <div className='flex gap-2 '>
                     <input className = 'border p-2 rounded-lg' type="checkbox" />
                     <h3 className='font-bold'>Remember Me</h3>
                     </div>
                     <a className='text-blue-500 ' href=''>Forgotten Password?</a>
                     </div>
                     
                     
                     
                     
                  
                  
                  <button className='bg-blue-500 p-2 rounded-lg text-white '>Login</button>
                   <p className='text-sm'>Not registered? <a className='text-blue-700 font-bold' href ='' >Create account </a></p>



            </form>



        </div>
        
        
        </div>
        
        </div>
        
    )

}
export default Modal