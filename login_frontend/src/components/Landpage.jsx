import styles from './Landpage.module.css';
import welcome from '../images/welcome.png';
import Tupcians from '../images/TUPCians.png';

const Landpage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}></div>
            <div className={styles.con}>
                <div className={styles.w}><img src={welcome}/></div>
                <div className={styles.t}><img src={Tupcians}/></div>
                <center><h4>This page is for requesting an Identification Card for
                    <span> Student</span> ,
                    <span> Alumni</span>, and <br></br>
                    <span> Faculty</span> at the Technological University of the Philippines-Cavite
                </h4></center>
            </div>
        </div>
    );
};

export default Landpage;