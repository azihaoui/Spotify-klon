import React from "react";
import { Box, IconButton, Stack, Typography, Slider } from "@mui/material";
import { SkipPrevious, SkipNext, PlayArrow } from "@mui/icons-material";

function PlayerController({ player, is_paused }) {
  return (
    <Stack spcing={2} justifyContent="center" sx={{ width: "100%" }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <IconButton size="small" sx={{ color: "text.primary" }}>
          <SkipPrevious sx={{ width: 28, height: 28 }} />
        </IconButton>
        <IconButton size="small" sx={{ color: "text.primary" }}>
          <PlayArrow sx={{ width: 38, height: 38 }} />
        </IconButton>
        <IconButton size="small" sx={{ color: "text.primary" }}>
          <SkipNext sx={{ width: 28, height: 28 }} />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: "75%" }}
      >
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}
        >
          1:23
        </Typography>
        <Slider size="medium" />
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}
        >
          3:23
        </Typography>
      </Stack>
    </Stack>
  );
}

export default PlayerController;
