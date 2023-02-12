import StartPage from "./components/StartPage/StartPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { createContext, useState } from "react";

export const valueContext = createContext(null);

function App() {

//personalInformation
let [firstname, setFirstname] = useState("");
const [firstnameError, setFirstnameError] = useState(null);

let [lastname, setLastname] = useState("");
const [lastnameError, setLastnameError] = useState(null);

let [about, setAbout] = useState("");

let [email, setEmail] = useState("");
const [emailError, setEmailError] = useState(null);

let [mobile, setMobile] = useState("");
const [mobileError, setMobileError] = useState(null);



  return (
    <valueContext.Provider
      value={{
        firstname,
        setFirstname,
        firstnameError,
        setFirstnameError,
        lastname,
        setLastname,
        lastnameError,
        setLastnameError,
        about,
        setAbout,
        email,
        setEmail,
        emailError,
        setEmailError,
        mobile,
        setMobile,
        mobileError,
        setMobileError,
      }}
    >
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="layout" element={<Layout />} />
      </Routes>
    </valueContext.Provider>
  );
}

export default App;
