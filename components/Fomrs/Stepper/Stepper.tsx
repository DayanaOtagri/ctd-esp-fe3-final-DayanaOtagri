import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { FormPersonalData } from '../DataPersonalForm/DataPersonalForm';
import { DirectionData } from '../DataDirection/DataDirection';
import { PaymentData } from '../DataPayment/DataPayment';
import { Alert, Snackbar } from '@mui/material';
import router from 'next/router';
import { FormData } from 'dh-marvel/features/checkout/form.types';


const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago'];

export interface SteppertProps {
  title: string,
  image: string,
  price: number,
}

export default function HorizontalLinearStepper({ title, image, price }: SteppertProps) {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [error, setError] = React.useState<string>("")
  const [formData, setFormData] = React.useState({
    nombre: '',
    apellido: '',
    email: '',

    direccion: '',
    dpto: '',
    ciudad: '',
    provincia: '',
    codigopostal: '',

    numtarjeta: '',
    nombretarjeta: '',
    codigodeseguridad: '',
    fechadeexpiración: '',
  })

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = async (data: FormData) => {
    const sentFormData = {
      customer: {
        name: formData.nombre,
        lastname: formData.apellido,
        email: formData.email,
        address: {
          address1: formData.direccion,
          address2: formData.dpto,
          city: formData.ciudad,
          state: formData.provincia,
          zipCode: formData.codigopostal,
        }
      },
      card: {
        number: data.numtarjeta,
        cvc: data.codigodeseguridad,
        expDate: data.fechadeexpiración,
        nameOnCard: data.nombretarjeta,
      },
      order: {
        name: title,
        image: image,
        price: price
      }
    }

    fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sentFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data['error']) {
          setError(data['message'])
        } else {
          localStorage.setItem('purchase-data', JSON.stringify(data))
          router.push({
            pathname: "/CompraConfirmacion",
          })
        }
      })
      .catch((error) => {
        console.error(error)
      });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} sx={{ marginBottom: "30px" }}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Typography sx={{ mt: 2, mb: 1, fontWeight: 700 }}>Paso {activeStep + 1}: {steps[activeStep]} </Typography>
      {activeStep === 0 &&
        <FormPersonalData
          formData={formData}
          setFormData={setFormData}
          activeStep={activeStep}
          handleNext={handleNext}
        />}

      {activeStep === 1 &&
        <DirectionData
          formData={formData}
          setFormData={setFormData}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />}

      {activeStep === 2 &&
        <PaymentData
          formData={formData}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
          onSubmit={onSubmit}
        />}

      {error !== "" &&
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity="error">
            {error}
          </Alert>
        </Snackbar>
      }
    </Box>
  );
}