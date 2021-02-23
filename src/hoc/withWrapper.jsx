import React from 'react';
import Popular from "../components/Popular";
import New from "../components/New";

export default function withWrapper() {
    return function (Component) {
        return class extends React.Component {
            render() {
                if (this.props.views > 1000)
                    return <Popular><Component {...this.props} {...this.state}/></Popular>;
                else if (this.props.views < 100)
                    return <New><Component {...this.props} {...this.state}/></New>;
                else
                    return <Component {...this.props} {...this.state}/>;
            }
        };
    };
}
