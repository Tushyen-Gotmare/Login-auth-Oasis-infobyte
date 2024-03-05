import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"
import { FontAwesomeIcon,faLocationDot } from '@fortawesome/react-fontawesome'


function Home(props) {
  return (
    < >
     <div className={styles.container}>
     <h2 className={styles.UserName}>{props.name ? ` ${props.name}` : "Login please"}</h2>
     <button className={styles.city}>Nagpur</button>
     </div>
     <div>
     {/* <FontAwesomeIcon icon={faLocationDot} /> */}
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>
    </>
  );
}

export default Home;