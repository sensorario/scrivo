import { TextField as MUITextField, Button, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Wrap } from "./style";
import { leggiBozza, salvaBozza } from "@/actions";

export default function TextField() {
  const ref = useRef<HTMLInputElement>(null);
  const [originale, setOriginale] = useState("");

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
        </Stack>
      </div>
    </Wrap>
  );
}
