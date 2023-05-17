import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode;
    onClick : () => void;
    color?: "success" | "primary" | "secondary";

}

const Button = ({ children, onClick, color}: ButtonProps) => {
    return (
        
            <button
                type="button"
            //    className="btn btn-primary"
            className = {color && "btn btn-"+color}
                onClick = {onClick}
               >
                {children}
            </button>
        
    )
}

export default Button