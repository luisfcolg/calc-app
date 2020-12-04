import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

const MathOperations = ({onClickOperation, onClickEqual}) => {
    return (
        <section className="math-operations">
            <Button clickHandler={onClickOperation} text={"+"}/>
            <Button clickHandler={onClickOperation} text={"-"}/>
            <Button clickHandler={onClickOperation} text={"*"}/>
            <Button clickHandler={onClickOperation} text={"/"}/>
            <Button clickHandler={onClickEqual} text={"="}/>
        </section>
    );
};

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
};

export default MathOperations;