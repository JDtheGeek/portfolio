import { Image } from "react-datocms"
import Styles from './CV.module.scss'

const ContactDetails = ({ data }): JSX.Element => {

  console.log('Data', data)
  return (
    <ul className={Styles["contact-info"]}>
      {data.map(
        contact => (
          <li key={contact.id} >
            <a href={contact.href}>
              <img className={Styles.icon} src={contact.icon.url} />
              {contact.label}
            </a>
          </li>
        )
      )}
    </ul>
  )
}

export default ContactDetails
