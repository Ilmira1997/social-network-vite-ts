import { ErrorMessage, SCAppInput } from "./AppInput.style";

type TOAppInput = {
    inputType: "password" | "email" | "text",
    inputPlaceholder: string,
    isError?: boolean,
    errorText?: string,
    isRequired: boolean
};


const AppInput = ({
    inputType,
    inputPlaceholder,
    isError,
    errorText,
    ...props
}: TOAppInput) => {
    return (
        <>
            <SCAppInput
                type={inputType}
                placeholder={inputPlaceholder}
                {...props}
                $isError={isError || false}
            />
            {isError && <ErrorMessage>{errorText}</ErrorMessage>}</>
    );
};

export default AppInput;