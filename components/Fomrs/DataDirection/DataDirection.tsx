import * as React from "react";
import { Box } from "@mui/material";
import { useForm} from "react-hook-form";
import Input from "../Input";
import { ButtonStepper } from "../Stepper/ButtonStepper";
import { DataDirection  } from "../form";
import { yupResolver } from "@hookform/resolvers/yup";

export type DirectionDataProps = {
    activeStep: number;
    handleNext: () => void;
    handleBack: () => void;
    setFormData: (data: any) => void;
    formData: any;
};

export const DirectionData: React.FC<DirectionDataProps> = ({ activeStep, handleNext, handleBack, formData, setFormData }: DirectionDataProps) => {

    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
            ...formData
        },
        resolver: yupResolver(DataDirection),
    })

    const onSubmit = (data: any) => {
        setFormData({
            ...formData,
            direccion: data.direccion,
            dpto: data.dpto,
            ciudad: data.ciudad,
            provincia: data.provincia,
            codigopostal: data.codigopostal,
        })
        handleNext();
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    required
                    label="Dirección"
                    control={control}
                    name="direccion"
                    error={Boolean(errors.direccion)}
                    helperText={`${errors.direccion?.message || ""}`}
                />
                <Input
                    label="Dpto, piso, etc. (opcional)"
                    control={control}
                    name="dpto"
                />
                <Input
                    required
                    label="Ciudad"
                    control={control}
                    name="ciudad"
                    error={Boolean(errors.ciudad)}
                    helperText={`${errors.ciudad?.message || ""}`}
                />
                <Input
                    required
                    label="Provincia"
                    control={control}
                    name="provincia"
                    error={Boolean(errors.provincia)}
                    helperText={`${errors.provincia?.message || ""}`}
                />
                <Input
                    required
                    label="Código postal"
                    control={control}
                    name="codigopostal"
                    error={Boolean(errors.codigopostal)}
                    helperText={`${errors.codigopostal?.message || ""}`}
                />
                <ButtonStepper
                    activeStep={activeStep}
                    handleNext={handleSubmit(onSubmit)}
                    handleBack={handleBack}
                />
            </form>
        </Box>
    );
}