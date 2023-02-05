import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import LibraryCard from "../components/LibraryCard";

function Library() {
  const { albumList } = useSelector((state) => state.playlist);

  return (
    <Box
      p={3}
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Typography
        sx={{ color: "text.primary", fontSize: 30, fontWeight: "bold" }}
      >
        Ditt bibliotek
      </Typography>
      <Grid container spacing={3}>
        {albumList?.map((album, i) => (
          <LibraryCard album={album} />
        ))}
      </Grid>
    </Box>
  );
}

export default Library;
