import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    const IndexNumber = ({ children }) => {
        console.log(children);
        return React.Children.map(children, (child, index) => {
            console.log(child, index);
            return (
                <div className="d-flex">
                    <div className="mx-1">{`${index + 1}.`}</div>
                    <div>{child}</div>
                </div>
            );
        });
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <IndexNumber>
                <Component />
                <Component />
                <Component />
            </IndexNumber>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
