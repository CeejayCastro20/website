import React, { useState } from "react";
import styles from "./Validation.module.css";
import Logo from "../images/tupLogo.png";
import Burger from "../images/burger.svg";
import Close from "../images/closeIcon.svg";
import Search from "../images/searchIcon.svg";
import Home from "../images/homeIcon.svg";
import Logout from "../images/logoutIcon.png";
import { Link, useLocation } from "react-router-dom";

function Validation() {
  const [isBurger, setIsBurger] = useState(false);
  const handleBurgerClick = () => {
    setIsBurger(!isBurger);
    console.log("burgerState", isBurger);
  };


const handleSearch = (event) => {
  console.log("i am working!")
  const table = document.getElementById("myTable");
  const tbody = table.querySelector("tbody");
  const rows = tbody.getElementsByTagName("tr");

  for (const row of rows) {
    const cells = row.getElementsByTagName("td");
    const lastName = cells[0].textContent;
    const firstName = cells[1].textContent;
    const idNumber = cells[2].textContent;
    const course = cells[3].textContent;
    const date = cells[4].textContent;
    const time = cells[5].textContent;

    processData(lastName, firstName, idNumber, course, date, time);

    function processData(lastName, firstName, idNumber, course, date, time) {
        // Perform some operation on the data
      console.log("Last Name:", lastName);
      console.log("First Name:", firstName);
      console.log("ID Number:", idNumber);
      console.log("Course:", course);
      console.log("Date:", date);
      console.log("Time:", time);
      }
    }
    /*function searchTable() {
    var input, filter, tab, tr, td, i, txtValue;
      input = document.getElementById("inputsearch");
      filter = input.value.toUpperCase();
      tab = document.getElementById("myTable");
      tr = tab.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }   
      } 
      document.getElementById("inputsearch").addEventListener("input", searchTable);    
    }*/
  }

        // Define a function to process table data
        /*

          // Iterate through the rows and extract data
          

              // Call your processing function with the extracted data
              

      // Define a function to process the extracted data
      


      function checkIfExists(item) {
        return processData.includes(item);

      // Function to handle the search button click
      function handleSearchButtonClick() {
          const itemToCheck = document.getElementById("itemInput").value;
          const resultMessage = document.getElementById("resultMessage");

          if (itemToCheck.trim() === "") {
              resultMessage.textContent = "Please enter an item.";
          } else if (checkIfExists(itemToCheck)) {
              resultMessage.textContent = `${itemToCheck} already exists in the list.`;
          } else {
              resultMessage.textContent = `${itemToCheck} does not exist in the list.`;
          }
      }

      // Event listener for the search button
      document.getElementById("searchButton").addEventListener("click", handleSearchButtonClick);
  };*/

  return (
    <div className={styles.container}>
      <div className={styles.above}>
        <div className={styles.navTitle}>
          <img src={Logo} />
          <h6>TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES-CAVITE</h6>
        </div>
        <div className={styles.navBurger} onClick={handleBurgerClick}>
          <img src={isBurger ? Close : Burger} sizes={50} />
        </div>
      </div>
      <div className={styles.con}>
        <div>
          <h1>STUDENT'S RECORD VALIDATION</h1>
        </div>
        <div className={styles.actions}>
          <div className={styles.searchContainer}>
            <input type="search" className={styles.searchInput} />
            <button
              id="inputsearch"
              type="submit"
              onClick={handleSearch}
              className={styles.searchButton}
            >
              <img src={Search} />
            </button>
          </div>
          <div className={styles.spread}>
            <button onClick={Request}>
              <strong>Download CSV</strong>
            </button>
            <button onClick={Request}>
              <strong>Print PDF</strong>
            </button>
            <button onClick={Request}>
              <strong>QR Code</strong>
            </button>
          </div>
        </div>
        <div>
          <table id="myTable" className={styles.dataTable}>
            <thead>
              <tr>
                <th>ID NUMBER</th>
                <th>LAST NAME</th>
                <th>FIRST NAME</th>
                <th>COURSE</th>
                <th>YEAR</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        {/* <div className={styles.left}>
          <div className={styles.left1}>
            <h2>STUDENT'S RECORD</h2>
            <div className={styles.spread1}>
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.spread}>
            <button onClick={Request}>
              <strong>Download CSV</strong>
            </button>
            <button onClick={Request}>
              <strong>QR Code</strong>
            </button>
          </div>
        </div> */}
      </div>
      {isBurger ? (
        <div className={styles.navCard}>
          <Link to="/home" onClick={handleBurgerClick}>
            <img src={Home} />
            Home
          </Link>
          <Link to="/">
            <img src={Logout} onClick={handleBurgerClick} />
            Logout
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Validation;
