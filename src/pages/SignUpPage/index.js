import React from 'react'
import { Container } from '../../Components/CarouselItem/styles';

export class Register extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
    <Container>
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Register</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="password" />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn">
              Register
            </button>
          </div>
        </div>
    </Container>
      );
    }
  }