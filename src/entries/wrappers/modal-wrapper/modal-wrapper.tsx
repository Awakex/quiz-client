import React from "react";
import styles from "./styles.module.sass";
import cn from "classnames";

interface IProps {
    position: "fixed" | "absolute";
    children: any;
    className?: string;
}

const ModalWrapper = ({position, children, className}: IProps) => {
    return (
        <div
            className={cn({
                [styles.modal]: true,
                [className]: !!className,
            })}
            style={{position}}
        >
            {children}
        </div>
    );
};

export default ModalWrapper;
