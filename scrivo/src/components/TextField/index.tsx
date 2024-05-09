import { TextField as MUITextField, Button, Stack } from "@mui/material";
import React, { use, useEffect, useRef, useState } from "react";
import { Wrap } from "./style";
import { converti, genera, salvaBozza } from "@/actions";

export default function TextField() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("current.article");
    if (saved && ref.current) {
      ref.current.value = saved;
    }
  }, []);

  // @todo leggere da file system per capire se c'è un file in scrittura
  // @todo leggere da file system per capire se c'è un file in scrittura
  // @todo leggere da file system per capire se c'è un file in scrittura
  // @todo leggere da file system per capire se c'è un file in scrittura
  // @todo leggere da file system per capire se c'è un file in scrittura
  // @todo leggere da file system per capire se c'è un file in scrittura
  // @todo leggere da file system per capire se c'è un file in scrittura
  // @todo leggere da file system per capire se c'è un file in scrittura
  // @todo leggere da file system per capire se c'è un file in scrittura
  // @todo leggere da file system per capire se c'è un file in scrittura

  return (
    <Wrap>
      <div className="row">
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
              if (ref.current) {
                localStorage.setItem("current.article", ref.current.value);
                salvaBozza({ testo: ref.current.value });
              }
            }}
          >
            salva bozza
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              converti();
            }}
          >
            converti
          </Button>
          <Button
            variant="contained"
            onClick={async () => {
              const generato = await genera();
              console.log(generato);
            }}
          >
            genera pdf
          </Button>
        </Stack>
      </div>
    </Wrap>
  );
}
