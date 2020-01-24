import React from "react";
import "./styles.css";

import Overlay from "./Components/Overlay";
import Dialog from "./Components/Dialog";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: 0 };
  }
  inc = () => {
    let b;
    this.setState(p => {
      b = p.a;
      return { a: -1 };
    });
    var q = this;
    setTimeout(() => {
      this.setState(p => {
        return { a: (b + 1) % 3 };
      });
    }, 1000);
  };
  render() {
    let e;
    const state = this.state.a;
    if (0 === state) {
      e = (
        <Dialog title="Ready">
          <button className="btn" onClick={() => this.inc()}>
            Start
          </button>
        </Dialog>
      );
    }
    if (1 === state) {
      e = (
        <Dialog title="Paused">
          <button className="btn btn-primary" onClick={() => this.inc()}>
            Resume
          </button>
          <button className="btn" onClick={() => console.log("end")}>
            Stop
          </button>
        </Dialog>
      );
    }
    if (2 === state)
      e = (
        <Dialog title="This is pretty long title This is pretty long title This is pretty long title">
          <button className="btn btn-primary" onClick={() => this.inc()}>
            Restart
          </button>
        </Dialog>
      );

    return (
      <div className="App">
        <div>this is sample text</div>
        <Overlay>{state !== -1 ? e : ""}</Overlay>
      </div>
    );
  }
}
