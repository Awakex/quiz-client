import React from "react";
import styles from "./styles.module.sass";
import cn from "classnames";

interface IProps {
    children: any;
    color: "primary" | "success";
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}

const Button = ({children, color, onClick, disabled, className}: IProps) => {
    return (
        <div
            className={cn({
                [styles.btn]: true,
                [styles[color]]: true,
                [styles.disabled]: !!disabled,
                disabled: disabled,
                [className]: !!className,
            })}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Button;
