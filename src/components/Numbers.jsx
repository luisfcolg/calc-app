import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const renderButtons = (onClickNumber) => {
    const renderButton = (number) => (
        <Button
            key={number}
            clickHandler={onClickNumber}
            text={number.toString()}
        />
    );

    return numbers.map(renderButton);
};

const Numbers = ({onClickNumber}) => {
    return (
        <section className={"numbers"}>
            {
                renderButtons(onClickNumber)
            }
        </section>
    );
};

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
};

export default Numbers;