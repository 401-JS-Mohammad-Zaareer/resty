import React from "react";
import './Main.scss';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            url: '',
            method: ''
        }
    }

    render () {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='url' placeholder='http://api.url.here' id='go'/>
                    <button type='submit' >GO!</button>
                    <br/>
                    <input type='radio' value='GET' name='method' id='get' defaultChecked={true}/><label htmlFor='get'>GET</label>
                    <input type='radio' value='POST' name='method' id='post'/><label htmlFor='post'>POST</label>
                    <input type='radio' value='PUT' name='method' id='put'/><label htmlFor='put'>PUT</label>
                    <input type='radio' value='DELETE' name='method' id='delete'/><label htmlFor='delete'>DELETE</label>
                    <br/>
                    <textarea></textarea>
                </form>
                <section>
                    <span>{this.state.method}</span>
                    <span>{this.state.url}</span>    
                </section>
            </main>
        );
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const url = e.target.url.value;
        const method = e.target.method.value
        this.setState({url, method});
    }
}

export default Main;