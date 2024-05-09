"use client";

import styles from "./page.module.css";
import { Paper, styled, Grid } from "@mui/material";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { Create, GitHub } from "@mui/icons-material";
import Link from "next/link";
import TextField from "@/src/components/TextField";

export default function Home() {
  const [isCreationActive, setCreationVisibility] = useState(false);

  const toggleArticle = () => {
    setCreationVisibility(!isCreationActive);
  };

  const renderSidebar = () => {
    return (
      <Paper sx={{ width: "100%" }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <Create fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={toggleArticle}>Scrivi bozza</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘N
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <GitHub fontSize="small">..</GitHub>
            </ListItemIcon>
            <ListItemText>
              <Link
                className={styles.link}
                target="_blank"
                href="https://github.com/sensorario/scrivo"
              >
                github
              </Link>
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    );
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className={styles.main}>
      <div className="container row">
        <h1>Scrivo!</h1>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Item>{renderSidebar()}</Item>
          </Grid>
          <Grid item xs={10}>
            <Item>
              {isCreationActive ? <TextField /> : "Pronto per scrivere un po?"}
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
