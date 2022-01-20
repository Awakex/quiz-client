import React from "react";
import styles from "./styles.module.sass";
import cn from "classnames";

interface IProps {
    children: any;
    className?: string;
    style?: object;
}

const Block = (props: IProps) => {
    return (
        <div
            className={cn({
                [styles.block]: true,
                [props.className]: !!props.className,
            })}
            style={{...props.style}}
        >
            {props.children}
        </div>
    );
};

export default Block;
