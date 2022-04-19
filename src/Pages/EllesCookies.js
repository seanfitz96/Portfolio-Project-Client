import { useState, useEffect } from "react"; //useState and useEffect used for showing our date correctly
import Axios from "axios"; //how me make calls to the backend and grab data
import React from "react";
import "../CSS/EllesCookies.css"; //importing the css for App
//import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MyCookieModal from "../Components/MyCookieModal.js";

function EllesCookies() {
  /////////// Start of endpoints and useSates and useEffects ///////////
  //useStates for my values
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [listOfCookies, setListOfCookies] = useState([]);

  //function for adding a cookie to the list
  //also using Axios to call backend data to frontend
  const addCookie = () => {
    Axios.post("https://portfolio-project-seanfitz.herokuapp.com/addCookie", {
      //this is made so the database is updated
      imgUrl: imgUrl,
      name: name,
      price: price,
      count: count,
    }).then((response) => {
      //this is made so that the data will show as soon as we add it. (no need to refresh each time)
      //(...) Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
      //When we invoke the function, we pass it all the values in the array using the spread syntax and the array name
      setListOfCookies([
        ...listOfCookies,
        {
          _id: response.data._id,
          imgUrl: imgUrl,
          name: name,
          price: price,
          count: count,
        },
      ]);
    });
  };

  //function for updating a cookie on the list
  //also using Axios to call backend data to frontend
  const updateCookie = (id) => {
    const newImgUrl = prompt("Enter Image Link Address: ");
    const newName = prompt("Enter New Cookie Name: ");
    const newPrice = prompt("Enter New Price: ");
    const newCount = prompt("Enter New Inventory: ");

    Axios.put("https://portfolio-project-seanfitz.herokuapp.com/update", {
      id: id,
      newImgUrl: newImgUrl,
      newName: newName,
      newPrice: newPrice,
      newCount: newCount,
    }).then(() => {
      //this is made so that the data will show as soon as we update it. (no need to refresh each time)
      setListOfCookies(
        listOfCookies.map((value) => {
          return value._id === id
            ? {
                _id: id,
                imgUrl: newImgUrl,
                name: newName,
                price: newPrice,
                count: newCount,
              }
            : value;
        })
      );
    });
  };

  // using ` ` for deleting
  const deleteCookie = (id) => {
    Axios.delete(`https://portfolio-project-seanfitz.herokuapp.com/delete/${id}`).then(() => {
      setListOfCookies(
        listOfCookies.filter((value) => {
          return value._id !== id;
        })
      );
    });
  };

  useEffect(() => {
    //useEffect function for reading a cookie to the list
    //also using Axios to call backend data to frontend
    Axios.get("https://portfolio-project-seanfitz.herokuapp.com/readCookie")
      .then((response) => {
        setListOfCookies(response.data);
      })
      .catch(() => {
        console.log("ERROR");
      });
  }, []);

  /////////////////   FUNCTIONS HERE   /////////////////////////////////

  //function that clears the input fields after submitting
  function clearInputs() {
    document.getElementById("imgUrlTextField").value = "";
    document.getElementById("nameTextField").value = "";
    document.getElementById("priceTextField").value = "";
    document.getElementById("countTextField").value = "";
  }

  //function that makes sure all inputs must be filled.
  //if they are all filled then a new cookie is added
  function InputValidation() {
    if (document.getElementById("imgUrlTextField").value === "" ||
      document.getElementById("nameTextField").value === "" ||
      document.getElementById("priceTextField").value === "" ||
      document.getElementById("countTextField").value === "" ) {
        alert("Please Fill All Inputs.");
      } else {
        alert("Your Cookie Was Inserted!");
        addCookie();
        clearInputs();
      }
  }



  //CAN WE DO THE VALIDATION WITH THE UPDATE ALERTS??

  // function InputValidation2() {
  //   if (document.getElementById("imgUrlTextField").value === "" ||
  //     document.getElementById("nameTextField").value === "" ||
  //     document.getElementById("priceTextField").value === "" ||
  //     document.getElementById("countTextField").value === "" ) {
  //       alert("Please Fill Out All Inputs.");
  //     } else {
  //       alert("Your Cookie Was Inserted!");
  //       updateCookie(value._id);
  //     }
  // }




  //function that will set a max on the price
  // function priceMax() {
  //   if (document.getElementById("priceTextField").value > 100) {
  //     alert("Don't overcharge those prices!");
  //   }
  // }

  //function that will set a max on the count
  // function CountMax() {
  //   if (document.getElementById("countTextField").value > 100) {
  //     alert("No way you made that many cookies!");
  //   }
  // }

  //function that will make it so there cannot be 0.5 count
  //function noHalfCount() {
  // }



  //////////////////////////////////////////////////////////////////////

  return (
    <div className="EllesCookiesWholePage">
      <div className="EllesCookiesTitleBackground">
        <style>
          {" "}
          @import
          url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
        </style>
        <div className="EllesCookiesTitle">Elle's Cookies</div>
      </div>

      <div className="backgroundForPage">
        <div className="inputs">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "340px" } }}
            autoComplete="off"
          >
            <TextField
              id="imgUrlTextField"
              label="Image URL..."
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                setImgUrl(event.target.value);
              }}
            />
            <TextField
              id="nameTextField"
              label="Cookie Name..."
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <TextField
              id="priceTextField"
              label="Cookie Price..."
              type="number"
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
            <TextField
              id="countTextField"
              label="Cookie Count..."
              type="number"
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                setCount(event.target.value);
              }}
            />
          </Box>
        </div>

        <div className="addNewCookieButton">
          <Button
            className={"customAddCookieButton"}
            style={{ color: "black" }}
            variant="contained"
            onClick={() => {
              InputValidation();
            }}
          >
            Add New Cookie
          </Button>
          <MyCookieModal />
        </div>

        {/* //////////////////////////////////////////////////////////////////// */}

        {/* this line is how we loop (map) through each of the values */}
        <div className="listOfCookies">
          {listOfCookies.map((value) => {
            return (
              // Need to keep this div so the cards can be diff sizes
              <div className="EntireCard">
                <Card sx={{ border: "solid", borderRadius: "5px" }}>
                  <CardMedia
                    component="img"
                    sx={{ objectFit: "fill" }}
                    height="200"
                    image={value.imgUrl}
                    alt="cookie"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {value.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${value.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Inventory: {value.count}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        updateCookie(value._id);
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => {
                        deleteCookie(value._id);
                      }}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EllesCookies;
