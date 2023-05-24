const Button = ({type,value,className,children}) => {
    return(
        <button type={type} value={value} className={className}>
            {children}
        </button>
    );
}
export default Button;