import * as React from "react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { ButtonStepper } from "../Stepper/ButtonStepper";
import { yupResolver } from "@hookform/resolvers/yup";
import { DataPersonalForm } from "../form";

export type FormPersonalDataProps = {
    activeStep: number;
    handleNext: () => void;
    setFormData: (data: any) => void;
    formData: any;
};

export const FormPersonalData: React.FC<FormPersonalDataProps> = ({ activeStep, handleNext, setFormData, formData }: FormPersonalDataProps) => {

    const { handleSubmit, formState: { errors }, control, } = useForm({
        defaultValues: {
            ...formData
        },
        resolver: yupResolver(DataPersonalForm),
    })

    const onSubmit = (data: any) => {
        setFormData({ ...formData, nombre: data.nombre, apellido: data.apellido, email: data.email })
        handleNext();
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    required
                    label="Nombre"
                    control={control}
                    name="nombre"
                    type="text"
                    error={Boolean(errors.nombre)}
                    helperText={`${errors.nombre?.message || ""}`}
                />
                <Input
                    required
                    label="Apellido"
                    control={control}
                    name="apellido"
                    error={Boolean(errors.apellido)}
                    helperText={`${errors.apellido?.message || ""}`}
                />
                <Input
                    required
                    label="Email"
                    control={control}
                    name="email"
                    error={Boolean(errors.email)}
                    helperText={`${errors.email?.message || ""}`}
                />
                <ButtonStepper
                    activeStep={activeStep}
                    handleNext={handleSubmit(onSubmit)}
                    handleBack={() => { }}
                />
            </form>
        </Box>
    );
}