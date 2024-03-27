import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { TextField } from "@mui/material";
import BasicTabs from "./CustomTab";

import axios from "axios";
export default function Form() {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [link, setLink] = useState("");
    const [schools, setSchools] = useState([]);
    const [experience, setExperience] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstname);
        console.log(lastname);
        console.log(link);
    };

    const clear = () => {
        // event.preventDefault();
        setFirstName("");
        setLastName("");
        setLink("");
    };

    const createGame = (event) => {
        event.preventDefault()
        console.log(schools)
        console.group(experience)
        axios.post("http://127.0.0.1:5000/submit-form",{
            firstname: firstname,
            lastname: lastname,
            link: link,
        }).then(response => {
            console.log(response.data)
            setFirstName("");
            setLastName("");
            setLink("");
        })
        .catch(error => {
            console.error("Error:",error)
        })
    }
    const handleSchoolsChange = (updatedSchools) => {
        setSchools(updatedSchools);
    };

    const handleExperienceChange = (updatedExperience) => {
        setExperience(updatedExperience);
    };

    return(
        <Box
            component="form"
            sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <div>
            <TextField
                required
                id="outlined-required"
                label="First Name"
                placeholder="First Name"
                value={firstname}
                onChange={(event) => {
                    setFirstName(event.target.value);
                }}
            />
            <TextField
                required
                id="outline-required"
                label="Last Name"
                placeholder="Last Name" 
                value={lastname}
                onChange={(event) => {
                    setLastName(event.target.value);
                }}
            />
            </div>
            <div>
                <TextField
                    required 
                    id="outline-required"
                    label="Profile Link"
                    placeholder="LinkedIn Profile Link"
                    value={link}
                    onChange={(event) => {
                        setLink(event.target.value);
                    }}
                />
            </div>
            <div>
            <BasicTabs 
            onSchoolsChange={handleSchoolsChange}
            onExperienceChange={handleExperienceChange}
            />
            </div>
            <div>
                <Button type="submit" variant="contained" color="primary" onClick={createGame}>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" onClick={clear}>
                    Clear
                </Button>
            </div>
            

        </Box>
    )
}