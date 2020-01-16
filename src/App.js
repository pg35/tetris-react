import React from "react";
import "./styles.css";

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
          <button onClick={() => this.inc()}>Start</button>
        </Dialog>
      );
    }
    if (1 === state) {
      e = (
        <Dialog title="Paused">
          <button onClick={() => this.inc()}>Resume</button>
          <button onClick={() => console.log("end")}>Stop</button>
        </Dialog>
      );
    }
    if (2 === state)
      e = (
        <Dialog title="Ready">
          <button onClick={() => this.inc()}>Restart</button>
        </Dialog>
      );

    return <div className="App">{e}</div>;
  }
}
