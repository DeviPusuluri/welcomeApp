// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'subscribe'}

  onSubscribe = () => {
    const {text} = this.state
    if (text === 'subscribe') {
      this.setState(() => ({text: 'subscribed'}))
    } else {
      this.setState(() => ({text: 'subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div>
        <div className="content-container">
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>
          <button onClick={this.onSubscribe} className="button" type="button">
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
