import './Button.css';
const Button = ({type,className,children}) => {
    return(
        <button type={type} className={className} data-testid='button'>
            {children}
        </button>
    );
}
export default Button;