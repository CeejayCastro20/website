import styles from './Fform.module.css';
import Button from '../Button.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Back from './back.png';

const Fform = () => {
    const [ registerEmail, setRegisterEmail ] = useState('');
    const [ registeridnumber, setRegisteridnumber ] = useState('');
    //const [ registertor, setRegistertor ] = useState('');
    const [ registerLname, setRegisterLname ] = useState('');
    const [ registerFname, setRegisterFname ] = useState('');
    const [ registerMidinitial, setRegisterMidinitial ] = useState('');
    const [ registerContnum, setRegisterContnum ] = useState('');

    //const handleChange = (event) => {
        //setSelectedValue(event.target.value);
    //}

    const Submit = () => {
        axios({
            method: "post",
            data: {
                Email: registerEmail,
                Idnumber: registeridnumber,
                //Tor: registertor,
                Lname: registerLname,
                Fname: registerFname,
                Midinitial: registerMidinitial,
                ContactNumber: registerContnum
            },
            withCredentials: true,
            url: "http://localhost:3000/Faculty-Form"
        })
    };

    //const Erase = () => {
        //var erase = document.getElementById("uprec");
        //erase.value = "";
        //erase.addEventListener("uprec", Erase)
    //}

    return (
        <div className={styles.container}>
            <div className={styles.con}>
                <div className={styles.tb}>
                    <Link to="/"><Button variant='secondary'><img src={Back}/></Button></Link>
                </div>
                <form>
                    <div className={styles.spread}>
                        <p>Email:</p>
                        <input type='em' onChange={e => setRegisterEmail(e.target.value)} placeholder=''></input>
                    </div>
                    <div className={styles.spread}>
                        <p>TUP ID number:</p>
                        <input type='id' onChange={e => setRegisteridnumber(e.target.value)} placeholder=''></input>
                    </div>
                    <div className={styles.spread1}>
                        <p>Type of Request:</p>
                        <select name="req" id="req">
                            <option value="n">New</option>
                            <option value="l">Loss</option>
                            <option value="c">Change</option>
                        </select>
                    </div>
                    <div className={styles.spread}>
                        <p>Last Name:</p>
                        <input type='ln' onChange={e => setRegisterLname(e.target.value)} placeholder=''></input>
                    </div>
                    <div className={styles.spread}>
                        <p>First Name:</p>
                        <input type='fn' onChange={e => setRegisterFname(e.target.value)} placeholder=''></input>
                    </div>
                    <div className={styles.spread}>
                        <p>Middle Initial:</p>
                        <input type='Midi' onChange={e => setRegisterMidinitial(e.target.value)} placeholder=''></input>
                    </div>
                    <div className={styles.spread}>
                        <p>Contact No.:</p>
                        <input type='cn' onChange={e => setRegisterContnum(e.target.value)} placeholder=''></input>
                    </div>


                    <div className={styles.spread2}>
                        <p>Upload Affidavit of Loss Here:</p>
                        <form action="">
                            <input type="file" id="uploss" name="fileloss"></input>
                        </form>
                    </div>
                    <div className={styles.spread2}>
                        <p>Upload Receipt Here:</p>
                        <form action="">
                            <input type="file" id="uprec" name="filerec"></input>
                        </form> 
                    </div>

                    <div className={styles.bot}>
                        <Link to="/"><Button variant='secondary' onClick={Submit}>Submit</Button></Link>
                        <Button type="reset" variant='secondary'>Clear</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Fform;