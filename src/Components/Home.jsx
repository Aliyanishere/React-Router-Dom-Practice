import { Component } from "react";
import Nav from "./navbar/navbar";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <h1>This is Home page</h1>
            </div>
        )
    }
}