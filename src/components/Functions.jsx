import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

const Functions = ({onContentClear, onDelete}) => {
    return (
        <section className="functions">
            <Button type={"button-long-text"} clickHandler={onContentClear} text={"clear"}/>
            <Button clickHandler={onDelete} text="&larr;"/>
        </section>
    );
};

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Functions;