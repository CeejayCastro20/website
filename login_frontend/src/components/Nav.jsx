import styles from './Nav.module.css';
import Button from './Button.jsx';
import Logo from '../images/logoS.png';
import TC from '../images/TUPCavite.png';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className={styles.container}>
            <div>
                <ul>
                    <Link to="/"><div className={styles.main}><Button variant='primary'> <img src={Logo}/> </Button></div></Link>
                    <Link to="/"><div className={styles.main1}><Button variant='primary'> <img src={TC}/> </Button></div></Link>
                    <div className={styles.hover}>
                        <Link to = "/admin"><Button variant='secondary'>Admin</Button></Link>
                        <Link to="/student-request-form-note"><Button variant='secondary'>Student</Button></Link>
                        <Link to = "/alumni-request-form-note"><Button variant='secondary'>Alumni</Button></Link>
                        <Link to="/faculty-request-form-note"><Button variant='secondary'>Faculty</Button></Link>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Nav;