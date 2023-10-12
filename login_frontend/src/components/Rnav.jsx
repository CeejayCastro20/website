import styles from './Rnav.module.css';
import Button from './Button.jsx';
import Logo from '../images/logoS.png';
import TC from '../images/TUPCavite.png';
import { Link } from 'react-router-dom';

const Rnav = () => {
    return (
        <div className={styles.container}>
            <div>
                <ul>
                    <Link to="/"><div className={styles.main}><Button variant='primary'> <img src={Logo}/> </Button></div></Link>
                    <Link to="/"><Button variant='primary'> <img src={TC}/> </Button></Link>
                    <h1>ID Request Form</h1>
                </ul>
            </div>
        </div>
    );
};

export default Rnav;