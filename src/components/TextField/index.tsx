import { TextField as MUITextField, Button, Stack } from "@mui/material";
import React, { useEffect, useRef } from "react";

export default function TextField() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("current.article");
    if (saved && ref.current) {
      ref.current.value = saved;
    }
  }, []);

  return (
    <>
      {" "}
      <MUITextField
        id="filled-textarea"
        label="Contenuto del tuo articolo"
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
    </>
  );
}
