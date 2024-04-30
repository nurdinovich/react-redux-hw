import classes from './Main.module.css'
import { Link } from 'react-router-dom'
import cardImg from './img/img-1.png'
import img2 from './img/2.jpg'
import corel from './img/3.jpeg'
import Header from '../Header/Header'


const Main = () => {
  return (
    <>
      <Header/>
   
      <main>
        <div className={classes.card}>
          <div className={classes.item}>
            <Link to='/skech'> <img  src={cardImg} alt="" /></Link>
           
            <div>
              <h1>Photoshop-Web deisgn</h1>
              <span>$290</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore maxime impedit beatae autem minus doloribus.</p>
          </div>
          <div className={classes.item}>
            <Link to='/items'><img src={img2} alt="" /></Link>
            <div>
              <h1>Skech module-app</h1>
              <span>$290</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore maxime impedit beatae autem minus doloribus.</p>
          </div>
          <div className={classes.item}>
            <Link to='/corel'><img src={corel} alt="" /></Link>
            <div>
              <h1>Corel fashion-desig</h1>
              <span>$290</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore maxime impedit beatae autem minus doloribus.</p>
          </div>
          <div className={classes.item}>
            <img src={cardImg} alt="" />
            <div>
              <h1>Photoshop-Web deisgn</h1>
              <span>$290</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore maxime impedit beatae autem minus doloribus.</p>
          </div>
          <div className={classes.item}>
            <img src={cardImg} alt="" />
            <div>
              <h1>Photoshop-Web deisgn</h1>
              <span>$290</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore maxime impedit beatae autem minus doloribus.</p>
          </div>
          <div className={classes.item}>
            <img src={cardImg} alt="" />
            <div>
              <h1>Photoshop-Web deisgn</h1>
              <span>$290</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore maxime impedit beatae autem minus doloribus.</p>
          </div>
        </div>
      </main>
    
      </>
  )
}

export default Main