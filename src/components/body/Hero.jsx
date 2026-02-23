
import Button from '../Head/Buton'
import ImpactCard from './ImpactCard'
import InfoCards from './InfoCards'
import {  MdOutlineHandshake, MdOutlineMemory, MdOutlinePeople, MdOutlinePsychology, MdOutlineSchool, MdOutlineSportsEsports, MdOutlineTrackChanges, MdOutlineTrendingUp} from 'react-icons/md'
import {MdOutlineLightbulb} from 'react-icons/md'
import {MdOutlineWorkspacePremium} from 'react-icons/md'
import ComplexCard from './ComplexCard'
import SuccessCard from './SuccessCard'
import ResearchCards from './ResearCards'
import NetworkCard from './NetworkCard'

function Hero(){
    return(
        <>
        
        <div  className='min-h-screen mt-16 bg-gradient-to-br from-blue-700/80  to-sky-300 grid md:grid-cols-2 lg:grid-cols-3 sm:font-sm md:font-l overflow-hidden '>
            <div className='w-11/12  justify-around md:w-full text-center ml-3 '>
                <h1 className='mt-96 text-4xl font-bold md:font-l sm:font-sm text-white mb-7 '>Where African Minds Convene to Solve Global Challenges</h1>
                <h3 className='text-xl text-white lg:text-left leading-normal'>The Palaver Institute is an act of epistemic independence. We center indigenous African knowledge systems as sophisticated scientific frameworks for understanding human intelligence and building ethical AI for Africa.</h3>
                <div className='grid justify-center  lg:flex lg:gap-3  lg:p-2'>
                     <Button 
                    text="Explore Research" 
                    className="mt-16  p-4 bg-white border border-white rounded-lg text-red-500 font-bold hover:scale-105 hover:translate-y-1 hover:shadow-2xl transition-all duration-300 mb-3 w-52"
                
                    />
                    <Button 
                    text="Join the Palaver" 
                    className="p-4 bg-transparent border border-white border-2 rounded-lg text-white font-bold hover:scale-105 hover:translate-y-1 hover:shadow-2xl transition-all duration-300 w-52 lg:mt-16 lg:mb-3 mb-16"
                
                    />
                </div>
               
            </div>

            
                
    
            

           
           

            
           
        </div>
        <div className=''>
        <div className='  grid items-center'>
            
        <div className=' mb-10 mt-2  font-bold p-3  lg:text-center grid justify-center ' >
            <h1 className='  mx-auto text-center  text-sm text-red-500 font-bold boder-none rounded-full p-2 bg-red-100 mt-16  '>
            About Us
        </h1>
            <h1 className='text-4xl mt-7 text-center'>About Palaver Institute</h1>
            <p className=' p-6 font-thin text-xl mt-6 leading-normal text-center w-6/7 lg:w-1/2 lg:ml-96'>Building the intellectual infrastructure for African independence through indigenous-centered research and pan-African collaboration.</p>
        </div>

        
        
        
        
       
       
        <ImpactCard/>

        </div>
        <div className=' grid grid-cols-1 justify-center lg:flex lg:justify-center lg:w-3/4 mx-auto lg:gap-5 md:grid-cols-2 '>

        <InfoCards
         icon={<MdOutlineTrackChanges/>}
         title = 'Our Mission'
         text = 'The Palaver Institute exists to decolonize the study of human intelligence by centering indigenous African epistemologies as sophisticated scientific frameworks. We conduct foundational research that bridges traditional wisdom with modern inquiry, creating knowledge that serves Africa first and the world second.'
         className='p-4 bg-red-100/50 w-1/6 m-4 text-red-500 text-4xl rounded-xl hover:scale-105 hover:duration-300 hover:bg-red-200'
         className2="w-11/12 p-4 bg-white border shadow-xl hover:border-red-200 hover:scale-105 transition-all duration-500 hover:shadow-l translate-y-1 rounded-2xl  m-4 lg:w-3/4 mx-auto  "
         
         
         />
          
         <ComplexCard
         icon={<MdOutlineLightbulb/>}
         title = 'Our Philosophy'
         content1='Indigenous Knowledge is Foundational Science:'
         content2='African epistemologies are not cultural artifacts—they are rigorous, field-tested frameworks for understanding complex systems.'
         content3 = {
            <>
            Sovereignty Precedes Prosperity: <span className='font-thin text-black'>Intellectual</span>
            </>
         }
         content4 = 'sovereignty must come before economic sovereignty. We build institutions that are financially, technologically, and intellectually independent.'
         className='p-4 bg-yellow-100/40 w-1/6 m-4 text-yellow-700/90 text-4xl rounded-xl hover:scale-105 hover:duration-300 hover:bg-red-200'
         
         />
         <SuccessCard
         icon={<MdOutlineWorkspacePremium/>}
         title = 'Proven Success'
         text = 'Our 2025 Cameroon pilot validated the model: 10 fellows across 8 fields produced 250+ pages of world-class research for under $1,000 USD.'
         icon2={<MdOutlineTrendingUp/>}
         className2='text-2xl text-red-700'
         content='Exceptional interdisciplinary scholarship'
         className='p-4 bg-gray-300/40 w-1/6 m-4 text-gray-600 text-4xl rounded-xl hover:scale-105 hover:duration-300 hover:bg-red-200'
         
         
         />
        
        
        </div>
         <div className=' mb-10 mt-52  font-bold p-3  lg:text-center grid justify-center ' >

        
            <h1 className='text-4xl mt-7 text-center'>Our Research Schools</h1>
            <p className=' p-6 font-thin text-xl leading-normal text-center w-6/7 lg:w-1/2 lg:ml-96'>Three Schools of research, each containing specialized Labs, addressing humanity's greatest challenges through indigenous African frameworks.</p>
        
        </div>
        <div className='grid grid-cols-1 justify-center lg:flex lg:justify-center lg:w-3/4 mx-auto lg:gap-7 md:grid-cols-2 '>
            <ResearchCards
            icon={<MdOutlinePsychology/>}
            school='School of Human Systems'
            lab='Indigenous Intelligence Lab (Flagship)'
            className2='text-red-500 font-bold'
            text="Our flagship lab decolonizes the study of human cognition by building the world's most comprehensive research on non-Western models of intelligence. This ethical foundation guides all our future AI work—we cannot build just AI without first understanding African cognition."
            partner1='Flagship Lab'
            partner2='Cameroon Pilot'
            partner3='Pan-African'
            className='p-4 bg-red-100/50 w-1/6 m-4 text-red-700 text-4xl mx-auto  rounded-full hover:scale-105 hover:duration-300 hover:bg-red-200'
            className3='flex gap-4 mt-5 text-red-600 font-bold font-semibold leading-tight text-sm md:grid md:grid-cols-2 text-center lg:grid-cols-3 '



            
            
            />

             <ResearchCards
            icon={<MdOutlineMemory/>}
            school='School of Sovereign Systems'
            lab='Sovereign Hardware Lab'
            className2='text-yellow-700/90 font-bold'
            text="Achieving technological independence by designing and fabricating African-built computational infrastructure. Our goal: custom servers, specialized AI chips, and data center hardware owned by Africa, for Africa."
            partner1='Tech Sovereignty'
            partner2='Rwanda 2026'
            partner3='Hardware'
            className='p-4 bg-yellow-700/10 w-1/6 m-4 text-yellow-700/90  text-4xl mx-auto  rounded-full hover:scale-105 hover:duration-300 hover:bg-yellow-700/20'
            className3='flex gap-4 mt-5 text-yellow-700/90 font-bold font-semibold leading-tight text-sm md:grid md:grid-cols-2 text-center lg:grid-cols-3'




            
            
            />


             <ResearchCards
            icon={<MdOutlineSportsEsports/>}
            school='School of Social Dynamics'
            lab='Gamification Lab'
            className2='text-yellow-700/90 font-bold'
            text="Transform wicked problems into complex interactive models. We gamify difficult disciplines—from astrophysics to understanding colonialism—to uncover novel solutions and create revolutionary educational tools."
            partner1='Innovation'
            partner2='Education'
            partner3='Problem-Solving'
            className='p-4 bg-yellow-700/10 w-1/6 m-4 text-yellow-700/90 text-4xl mx-auto  rounded-full hover:scale-105 hover:duration-300 hover:bg-yellow-700/20'
            className3='flex mt-5 gap-4 text-yellow-700/90 font-bold font-semibold leading-tight text-sm md:grid md:grid-cols-2 text-center lg:grid-cols-3'


            />
            
        
        </div>
        <div className='mt-16 grid justify-center'>
                <p>Interested in joining our research community?</p>
                <Button 
                    text="Explore Research" 
                    className="mt-4  p-4 bg-red-700 border border-white rounded-lg text-white font-bold hover:scale-105 hover:translate-y-1 hover:shadow-2xl transition-all duration-300 mb-16 w-52 mx-auto "
                
                    />
            </div>

            <div className='  grid items-center'>
            
        <div className=' mb-10 mt-2  font-bold p-3  lg:text-center grid justify-center ' >
            <h1 className='  mx-auto text-center  text-sm text-red-500 font-bold boder-none rounded-full p-2 bg-red-100 mt-16  '>
          Network
        </h1>
            <h1 className='text-4xl mt-7 text-center leading-tight'>Fellowship & Network</h1>
            <p className=' p-6 font-thin text-xl leading-normal text-center w-6/7  lg:mx-auto'>Building a continental network of exceptional African researchers and scholars.</p>
        </div>
        </div>

        <div className='p-4  grid grid-cols-1 justify-center lg:flex lg:justify-center lg:w-3/4 mx-auto lg:gap-5 md:grid-cols-2  md:gap-5'>

        <InfoCards
         icon={<MdOutlineSchool/>}
         title = 'Founding Fellows'
         text = 'Our 2025 Cameroon Cohort: 10 exceptional researchers across Philosophy, Linguistics, Economics, Education, Anthropology, Sociology, and Medicine who validated our model with world-class scholarship.'
         className='p-4 bg-white w-1/6 m-4 text-red-500 text-4xl rounded-xl hover:scale-105 hover:duration-300 hover:bg-red-200'
         className2='"w-11/12 p-4 bg-gradient-to-r from-red-200/70  border shadow-xl hover:border-red-200 hover:scale-105 transition-all duration-500 hover:shadow-l translate-y-1 rounded-2xl  m-4 lg:w-3/4 mx-auto  "'
         
         
         />


         <InfoCards
         icon={<MdOutlinePeople/>}
         title = 'Fellows Network'
         text = "Highly selective 6-month fellowship program for Master's and PHD-level African researchers. Two cohorts annnually accross five continental hubs create a prestigious pan-African research network."
         className='p-4 bg-white w-1/6 m-4 text-red-500 text-4xl rounded-xl hover:scale-105 hover:duration-300 hover:bg-red-200'
         className2='"w-11/12 p-4 bg-gradient-to-r from-orange-100  border shadow-xl hover:border-red-200 hover:scale-105 transition-all duration-500 hover:shadow-l translate-y-1 rounded-2xl  m-4 lg:w-3/4 mx-auto  "'
         
         
         />


         <InfoCards
         icon={<MdOutlineHandshake/>}
         title = 'Strategic Partnership'
         text = 'Collaborating with leading African universities: University of Buea(Cameroon), University of Ghana, University of Rwanda, University of Cape Town, and Mohamammed VI Polytechnic (Morocco).'
         className='p-4 bg-white w-1/6 m-4 text-red-500 text-4xl rounded-xl hover:scale-105 hover:duration-300 hover:bg-red-200'
         className2='"w-11/12 p-4 bg-gradient-to-r from-gray-200  border shadow-xl hover:border-red-200 hover:scale-105 transition-all duration-500 hover:shadow-l translate-y-1 rounded-2xl  m-4 lg:w-3/4 mx-auto  "'
         
         
         />
         </div>
         <div className=''>
            <NetworkCard
         title='Join Our Network'
         text="We're building the intellectual infrastructure for African independence. Our fellowship program is highly selective, bringing together the continent's brightest minds to tackle humanity's greatest challenges through indigenous African frameworks."
         
         
         
         />
         </div>
         
         

         </div>
        
        
        
        </>
        
    )

}
export default Hero