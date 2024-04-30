import { useNavigate } from "react-router-dom";
import classes from "./Corel.module.css"
import Header from "../Header/Header";
import img from "./img/3.jpeg"
const Corel = () => {
  const navigate = useNavigate();
  const onBackClick = () => navigate(-1)
  return (
    <>
    <Header/>
   <main>
     <div className={classes.skech}>
     <img className={classes.img} src={img} alt="" />
     <div className={classes.title}>
     <h1>Photoshop-Web deisgn</h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi delectus sed nisi recusandae consectetur blanditiis quaerat voluptates modi, suscipit pariatur optio quam possimus ipsum odit repudiandae. Impedit atque ad sit quasi vitae facere aut recusandae! Placeat quibusdam quod blanditiis dignissimos necessitatibus molestias doloremque autem obcaecati debitis, omnis magni dolorem.</p>
     <div className={classes.divBtn}>
       <button onClick={onBackClick}>back</button>
       <button>Next</button>
     </div>
     </div>
    
     </div>
   </main>
   </>
  )
}

export default Corel