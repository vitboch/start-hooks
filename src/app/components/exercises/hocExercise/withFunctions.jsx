import React from "react";
import { useHistory } from "react-router-dom";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const history = useHistory();
    const isAuth = localStorage.getItem("auth");

    const handleLogin = () => {
        localStorage.setItem("auth", "token");
        history.replace("/hoc");
    };

    const handleLogout = () => {
        localStorage.removeItem("auth");
        history.replace("/hoc");
    };

    return (
        <CardWrapper>
            <div className="mb-2">
                Пользователь
                {isAuth ? " " : " НЕ "}
                авторизован
            </div>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogout={handleLogout}
            />
        </CardWrapper>
    );
};

export default withFunctions;
