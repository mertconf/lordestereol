import Navbar from '../Components/Navbar'
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";

const Projects = () => {

  const projects = [
    { icon: `fa-solid fa-truck`, title: "BYK Logistics™ | Owner", description: "BYK Logistics™ TruckersMP oyununun en başarılı ve en büyük Türk ekiplerinden biridir. Ekibimizin amacı TruckersMP oynamak, eğlenmek, sohbet etmek, konvoylar yapmak, diğer ekiplerin konvoylarına katılmak vb. Sende TruckersMP oyunuyorsan ekibimize göz atmanı öneririm.", url: "https://truckersmp.com/vtc/71445" },
  ]

  return (
    <div>
      <Helmet>
        <title>projelerim | lordestereol</title>
      </Helmet>

      <Navbar />

      <div className='sm:ml-32'>
        <div className='mx-auto max-w-4xl px-8 sm:px-0'>
          <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }}>
            <h1 className='text-5xl font-bold'>Projelerim</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.3 }}>
            <p className='text-gray-400 mt-2'>İşte, şu anda üzerinde çalıştığım projelerim.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.5 }} className='flex flex-col gap-6 mt-8'>
            {projects.map((project, index) => (
              <div key={index} className='focus:outline-none transition duration-300 ease-in-out transform flex flex-col sm:flex-row text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-800 shadow max-w-2xl hover:scale-105'>
                <a href={project.url} target='_blank' className='flex flex-col sm:flex-row gap-6 items-center'>
                  <i class={`${project.icon} text-4xl`}></i>
                  <div>
                    <h2 className='font-bold'>{project.title}</h2>
                    <p className='text-gray-300'>{project.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className='fixed bottom-0 left-0 ml-4 mb-4'>
        <span className="top-20 left-20 right-20 shadow-[30px_0_1000px_70px_#3730a3]"></span>
      </div>
    </div>
  )
}

export default Projects
