import { Image } from "react-datocms"
import Styles from './CV.module.scss'
import Badge from '../Badge/index';
import { byName } from '../../lib/sort';

const Skills = ({ data }): JSX.Element => {

  console.log('Data', data)
  return (
    <div className={Styles["skills"]}>
      {data
        .sort(byName)
        .map(skill => (
          <Badge key={skill.id} showcase={skill.showcase} >
            <>
              <img src={skill.icon.url} alt="" />
              {skill.name}
            </>
          </Badge>
        )
        )}
    </div>
  )
}

export default Skills
