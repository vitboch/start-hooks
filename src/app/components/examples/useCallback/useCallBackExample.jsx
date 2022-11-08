import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // Without Callback
    const valiidateWithOutCallBack = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withCallBack.current++;
    }, [valiidateWithOutCallBack]);

    // With Callback
    const valiidateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withOutCallBack.current++;
    }, [valiidateWithCallBack]);

    useEffect(() => {
        valiidateWithOutCallBack(data);
        valiidateWithCallBack(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallBack: {withOutCallBack.current}</p>
            <p>Render withCallBack: {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
