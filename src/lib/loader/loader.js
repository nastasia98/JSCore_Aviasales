import logo from '../../assets/images/Logo.png'

import classes from './loader.module.scss'

export default function Loader() {
  return (
    <div className={classes.loader}>
      <img className={classes.logo} src={logo} alt="logo" />
      Подгружаем билеты...
    </div>
  )
}
