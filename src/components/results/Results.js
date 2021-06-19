import React from 'react';
import ReactJson from 'react-json-view'
import './Results.scss';

class Results extends React.Component {
    render() {
        return(
            <>
                <section>
                    <ReactJson theme="brewer" name="Response" src={this.props.data} />
                </section>
            </>
        );
    };
}
export default Results;