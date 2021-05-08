import styles from './Button.module.scss'

type ButtonProps = {
  children?: React.ReactNode;
};

const Button = ({ children }: ButtonProps): JSX.Element => {
  return (
    <div className={styles.button}>
      {children}
    </div>
  )
}

export default Button