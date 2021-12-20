import React, { useState, useEffect } from "react";
import "./App.css";

const data = [
    {
        value: 0,
        name: "Tincidunt",
        heading: "Donec vitae",
        info: "Ut tincidunt tincidunt erat. Fusce convallis metus id felis luctus adipiscing. Vivamus quis mi. Nullam vel sem. Morbi ac felis.",
        infoII: "Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.",
        button: false,
    },
    {
        value: 1,
        name: "Sodales",
        heading: "Donec sodales sagittis",
        info: "Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.",
        infoII: "",
        button: true,
    },
];

const Tabs = () => {
    const [activeValue, setActiveValue] = useState(0);
    const [buttonState, setButtonState] = useState("primary");

    const buttonColour = () => {
        const newState = buttonState === "primary" ? "secondary" : "primary";
        setButtonState(newState);
        console.log(newState);
    };

    return (
        <>
            <div className='tabHead' key='tabHead'>
                {data.map(tab => {
                    const activeTab =
                        tab.value === activeValue ? "activeTab" : "";
                    return (
                        <span
                            key={tab.value}
                            className={"tab " + activeTab}
                            onClick={() => setActiveValue(tab.value)}
                            data-testid={'tab'+tab.value}>
                            {tab.name}
                        </span>
                    );
                })}
            </div>
            <div className='tabs' key='tabBody'>
                <h3>{data[activeValue].heading}</h3>
                <p>{data[activeValue].info}</p>
                <p>{data[activeValue].infoII}</p>
                {data[activeValue].button ? (
                    <button
                        className={"button " + buttonState}
                        onMouseEnter={() => buttonColour()}
                        onMouseLeave={() => buttonColour()}>
                        Continue
                    </button>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default Tabs;
