import React from "react";

export class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowinginput: false,
      localStatus: this.props.status,
    };
  }

  componentDidMount() {
    // if (!this.props.currentProfile.userId) {
    //   this.props.getStatus(2);
    // }
    // this.props.getStatus(this.props.currentProfile.userId);
  }

  showInput() {
    this.setState({ isShowinginput: true });
  }

  hideInput() {
    this.setState({ isShowinginput: false });
  }

  changeValueInput(e) {
    const currentInput = e.currentTarget.value;
    this.setState({ localStatus: currentInput });
  }

  setStatusToRedux() {
    this.hideInput();
    this.props.updateStatus(this.state.localStatus);
  }

  // componentDidUpdate(previousProps, previousState) {
  //   if (this.props.status !== previousProps.status) {
  //     this.setState({ localStatus: this.props.status });
  //   }
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.isShowinginput && (
          <div>
            <input
              onBlur={this.setStatusToRedux.bind(this)}
              autoFocus={true}
              onChange={this.changeValueInput.bind(this)}
              value={this.state.localStatus}
              placeholder={"input..."}
            />
          </div>
        )}
        {!this.state.isShowinginput && (
          <span>
            <span onDoubleClick={this.showInput.bind(this)}>
              {this.props.status || "..."}
            </span>
          </span>
        )}
      </div>
    );
  }
}
