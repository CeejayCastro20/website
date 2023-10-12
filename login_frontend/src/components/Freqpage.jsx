import styles from './Freqpage.module.css';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';

const Freqpage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}></div>
            <div className={styles.con}>
                <center><h1><br></br>TAKE TIME TO READ THIS BEFORE PROCEEDING !</h1></center>
                <h3>Fill out all the necessary information for requesting an ID in this form.</h3>
                <h2>Reminder:</h2>
                <h3>a. For Loss ID kindly prepare the following:</h3>
                <h4>1. Affidavit of Loss
                    <br></br>2. Receipt from cashier
                </h4>
                <h3>b. For ID Change prepare the following:</h3>
                <h4>1. Receipt from cashier
                    <br></br>2. The old ID (to be surrendered to UITC)
                </h4>
                <h2>Note:</h2>
                <h3>*All replacement will charged 150 pesos ID fee to be paid at the Cashier's Office.</h3>
                <div className={styles.bot}>
                    <Link to="/Faculty-Form"><Button variant ='secondary'>Proceed</Button></Link>
                    <Link to="/"><Button variant ='secondary'>Cancel</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Freqpage;