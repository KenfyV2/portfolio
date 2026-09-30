import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, skillGroups } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I work with</p>
      <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
    </motion.div>
    <div className="mt-10 flex flex-wrap justify-center gap-8">
      {technologies.map((technology) => (
        <div className="w-28 text-center" key={technology.name}>
          <div className="h-28" aria-hidden="true"><BallCanvas icon={technology.icon} /></div>
          <p className="mt-2 text-sm text-secondary">{technology.name}</p>
        </div>
      ))}
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
      {skillGroups.map((group) => (
        <div key={group.title} className="rounded-2xl border border-white/15 bg-black-100 p-6">
          <h3 className="text-lg font-semibold text-white">{group.title}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li key={skill} className="rounded-lg bg-white/10 px-3 py-2 text-sm text-secondary">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "skills");
