import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { FC } from "react";
import { useController } from "react-hook-form";

export type Props = {
    control: any;
    name: string;
    rules?: any;
} & TextFieldProps;

const Input: FC<Props> = ({ control, name, rules, ...props }) => {

    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const { field } = useController({
        name,
        control,
        rules,
    });

    return (
        <Box
            sx={{
                position: "relative",
                paddingY: "5px",
            }}>
            <TextField
                style={{ width: "100%", margin: "5px" }}
                {...field} {...props}
                type={(name === 'codigodeseguridad' && !showPassword) ? "password" : 'text'}
            />

            {name === 'codigodeseguridad' &&
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{
                        position: "absolute",
                        right: "10px",
                        top: "17px",
                    }}
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            }
        </Box>
    )
};

export default Input;