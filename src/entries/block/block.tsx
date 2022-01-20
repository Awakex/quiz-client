import React from "react";
import styles from "./styles.module.sass";
import cn from "classnames";

interface IProps {
    children: any;
    lightningColor?: string;
    className?: string;
}

const Block = (props: IProps) => {
    return (
        <div
            className={cn({
                [styles.block]: true,
                [props.className]: !!props.className,
            })}
            style={{
                border: `1px solid ${props.lightningColor}`,
                boxShadow: `0 0 5px ${props.lightningColor}`,
            }}
        >
            {props.children}
        </div>
    );
};

export default Block;
