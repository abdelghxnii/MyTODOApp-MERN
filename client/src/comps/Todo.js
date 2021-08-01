import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <h3 className="text-dark text-center p-1 bg-light">
            <i className="far fa-times-circle fa-sm  m-1 flt2 text-danger" ></i>Task
            <input type="checkbox" className="m-2 flt1"></input>

            </h3>
        )
    }
}
