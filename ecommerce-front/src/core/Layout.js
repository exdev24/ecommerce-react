import React from "react";
import Menu from "./Menu";
import "../styles.css";
import {Animated} from "react-animated-css";


const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Menu />
        <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        </Animated>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
