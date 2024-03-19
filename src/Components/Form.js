import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { TextField } from "@mui/material";
import { clear } from "@testing-library/user-event/dist/clear";

export default function Form() {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [link, setLink] = useState("");

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
                label="Required"
                placeholder="First Name"
                value={firstname}
                onChange={(event) => {
                    setFirstName(event.target.value);
                }}
            />
            <TextField
                required
                id="outline-required"
                label="Required"
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
                    label="Required"
                    placeholder="LinkedIn Profile Link"
                    value={link}
                    onChange={(event) => {
                        setLink(event.target.value);
                    }}
                />
            </div>
            <div>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
                <Button variant="contained" color="secondary" onClick={clear}>
                    Clear
                </Button>
            </div>
            

        </Box>
    )
}