"use client";

import styles from "./page.module.css";
import { TextField, Button, Stack, Paper, styled, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { Create, GitHub } from "@mui/icons-material";
import Link from "next/link";

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
            <ListItemText onClick={toggleArticle}>
              Crea nuovo articolo
            </ListItemText>
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

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("current.article");
    if (saved && ref.current) {
      ref.current.value = saved;
    }
  }, []);

  const renderDetails = () => {
    return (
      <div className="detail">
        <h2>Aggiungi contenuti al tuo articolo!</h2>
        <TextField
          id="filled-textarea"
          label="Contenuto articolo"
          placeholder="Scrivi qui il tuo articolo"
          multiline
          fullWidth
          variant="filled"
          inputRef={ref}
          defaultValue={localStorage.getItem("current.article")}
        />

        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={() => {
              if (ref.current)
                localStorage.setItem("current.article", ref.current.value);
            }}
          >
            salva bozza
          </Button>
        </Stack>
      </div>
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
      <h1>Scrivo!</h1>
      <div className="row">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>{renderSidebar()}</Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              {isCreationActive
                ? renderDetails()
                : "Pronto per scrivere un po?"}
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
