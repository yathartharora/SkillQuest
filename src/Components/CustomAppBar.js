import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";

const CustomAppBar = () => {

    return(
        <AppBar position="fixed">
            <Container>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    HOME
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ABOUT
                </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default CustomAppBar;