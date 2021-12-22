import React, { Component } from "react";

interface SignInBarProp {
    label?: string;
}

class SignInBar extends Component<SignInBarProp> {
    constructor(props: SignInBarProp){
        super(props);

        this.state = {}
    }

    render() {
        return <div>{this.props.label}</div>
    }
}

export default SignInBar;