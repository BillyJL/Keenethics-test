import classes from "./index.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <span className={classes.developer}>Developer: </span>
            <span className={classes.name}> Taras Mikulskyi</span>
        </footer>
    );
};

export default Footer;
