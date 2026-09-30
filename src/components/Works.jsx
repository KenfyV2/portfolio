import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, context, description, points, tags, image, source_code_link }) => (
  <motion.article variants={fadeIn("up", "spring", index * 0.15, 0.75)} className="min-w-0 h-full">
    <Tilt className="bg-tertiary p-6 rounded-2xl h-full flex flex-col" tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1} transitionSpeed={450}>
      <div className="rounded-xl bg-gradient-to-br from-black-100 to-primary border border-white/15 h-36 flex items-center justify-center" aria-hidden="true">
        <img src={image} alt="" className="w-20 h-20 object-contain" />
      </div>
      <div className="mt-5">
        <p className="text-[#deccff] text-xs leading-5">{context}</p>
        <h3 className="mt-2 text-white font-bold text-2xl">{name}</h3>
        <p className="mt-3 text-secondary text-sm leading-6">{description}</p>
        <ul className="mt-4 list-disc ml-5 space-y-3">
          {points.map((point) => <li key={point} className="text-secondary text-sm pl-1 leading-6">{point}</li>)}
        </ul>
      </div>
      <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2" aria-label="Technologies">
        {tags.map((tag) => <li key={tag.name} className={`text-sm ${tag.color}`}>{tag.name}</li>)}
      </ul>
      <div className="mt-auto pt-6">
        {source_code_link ? (
          <a href={source_code_link} target="_blank" rel="noopener noreferrer" aria-label={`View ${name} repository on GitHub`} className="inline-flex items-center gap-3 rounded-lg bg-black-100 px-4 py-3 text-sm font-semibold text-white hover:bg-primary transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <img src={github} alt="" className="w-5 h-5 object-contain" /> View Repository <span aria-hidden="true">↗</span>
          </a>
        ) : <p className="text-sm text-secondary">Academic team project</p>}
      </div>
    </Tilt>
  </motion.article>
);

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Selected work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Team and personal projects covering backend APIs, AI document processing, real-time applications, mobile data persistence, and self-hosted infrastructure. Here’s what I contributed to each.
    </motion.p>
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-7">
      {projects.map((project, index) => <ProjectCard key={project.name} index={index} {...project} />)}
    </div>
  </>
);

export default SectionWrapper(Works, "projects");
