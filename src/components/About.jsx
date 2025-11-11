import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { services } from '../constants/constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';
import HouseCanvas from './canvas/sea_house';


const ServiceCard=({index, title, icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
      >
        <div
        options={{
          max:45,
          scale:1,
          speed:450,
          // transition:true,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
 
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.div className="flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My name is Praphul Kumar Singh and I am a recent graduate with degree in
          Bachalor's Of Computer Application (BCA) from IKGPTU University. <br/>
          During my studies, I developed a strong foundation in DSA,
          HTML, CSS, JavaScript, TypeScript, React, Next, Node, Express, MongoDB
          through course-work and projects.<br/> I am particularly passionate about
          Full Stack Web Development. Infact , I have completed a summer
          tarining in Web Development. Done some of the projects in web
          development that are listed below.<br/>1. Portfolio Website <br/>2. Blog Website <br/>3. Social Media Website<br/>I am highly motivated and eager to
          learn new technologies and skills. I am a quick learner and I am
          always ready to learn new things. I am a team player and I am always
          ready to help others.
        </motion.p>
        {/* <HouseCanvas /> */}
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About,"about");
