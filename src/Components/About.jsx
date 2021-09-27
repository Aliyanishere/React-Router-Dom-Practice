import { Component } from "react";
import Nav from "./navbar/navbar";

export default class About extends Component {
    render() {
        return (
            <div>
                <Nav />
                <h1>This is About page</h1>
            </div>
        )
    }
}