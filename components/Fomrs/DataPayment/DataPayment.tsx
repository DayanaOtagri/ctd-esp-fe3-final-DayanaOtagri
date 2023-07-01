import * as React from "react";
import { Box } from "@mui/material";
import Input from "../Input";
import { useForm, useFormContext } from "react-hook-form";
import { ButtonStepper } from "../Stepper/ButtonStepper";
import { DataPayment } from "../form";
import { yupResolver } from "@hookform/resolvers/yup";

export type PaymentDataProps = {
    activeStep: number;
    handleNext: () => void;
    handleBack: () => void;
    onSubmit: (data: any) => void;
    formData: any;
};

export const PaymentData: React.FC<PaymentDataProps> = ({ activeStep, handleNext, handleBack, onSubmit, formData }: PaymentDataProps) => {

    const { handleSubmit, formState: { errors }, control, } = useForm({
        defaultValues: {
            ...formData
        },
        resolver: yupResolver(DataPayment),
    })

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    required
                    label="Número de tarjeta"
                    control={control}
                    name="numtarjeta"
                    error={Boolean(errors.numtarjeta)}
                    helperText={`${errors.numtarjeta?.message || ""}`}
                />
                <Input
                    required
                    label="Nombre como aparece en la tarjeta"
                    control={control}
                    name="nombretarjeta"
                    error={Boolean(errors.nombretarjeta)}
                    helperText={`${errors.nombretarjeta?.message || ""}`}
                />
                <Input
                    required
                    label="Fecha de expiración"
                    control={control}
                    name="fechadeexpiración"
                    error={Boolean(errors.fechadeexpiración)}
                    helperText={`${errors.fechadeexpiración?.message || ""}`}
                />
                <Input
                    required
                    label="Código de seguridad"
                    control={control}
                    name="codigodeseguridad"
                    error={Boolean(errors.codigodeseguridad)}
                    helperText={`${errors.codigodeseguridad?.message || ""}`}
                />
                <ButtonStepper
                    activeStep={activeStep}
                    handleNext={handleSubmit(onSubmit)}
                    handleBack={handleBack}
                />
            </form >
        </Box>
    );
}