import React from "react"

class Message extends React.Component {
  render () {
    return (
      <li className="Message">
          {new Date(this.props.createdAt).toDateString()} at
          {this.props.username}
          posted:
          
      </li>
    )
  }
}

export default Message