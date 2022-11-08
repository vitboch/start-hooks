import React from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";

import SmallTitle from "../../common/typografy/smallTitle";
const CloneElementExample = () => {
    const field = <TextField label="email" name="email" />;
    const handleChange = (target) => {
        console.log("target:", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            <Divider />
            {field}
            {React.cloneElement(field, {
                onChange: handleChange,
                label: "Clone email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;
