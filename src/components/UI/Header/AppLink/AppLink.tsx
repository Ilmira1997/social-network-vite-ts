type TOAppLink={
    linkText:string
}

const AppLink = ({linkText}:TOAppLink) => {
    return (
        <a >{linkText}</a>
    );
};

export default AppLink;