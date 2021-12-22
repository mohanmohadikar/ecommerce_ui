import React from "react";
import SignInBar from ".";

interface SignInBarProp {
    label?: string;
}


export default {
    title: "SignIn Bar",
    component: SignInBar,
}

const primaryProp = {
    label: "primary text"
}

export const Template = () => <SignInBar label={"random text"} />
