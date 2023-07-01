import React, { FC } from "react";
import { Box, Button } from "@mui/material";

type PropsStepperButtons = {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
};

export const ButtonStepper: FC<PropsStepperButtons> = ({ activeStep, handleNext, handleBack }: PropsStepperButtons) => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Anterior
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          onClick={handleNext}
        >
          {activeStep < 2 ? 'Siguiente' : 'Finalizar compra'}
        </Button>
      </Box>
    </Box>
  );
};

