import { SCAppButton } from "./AppButton.style";

type TOAppButton = {
    buttonText:string,
    buttonType:"submit" | "button"
    isDisabled ?:boolean
}


const AppButton = ({buttonText,buttonType,isDisabled}: TOAppButton) => {
    return (
        <SCAppButton disabled={isDisabled} type={buttonType}>{buttonText}</SCAppButton>
    );
};

export default AppButton;