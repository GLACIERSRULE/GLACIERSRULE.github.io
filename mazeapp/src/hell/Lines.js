import React from 'react/addons';

class Lines extends React.Component {
  onClickL() {
    
  }
  onClickR() {
    () => alert('click');
  }
  render() {
    return (
    <div className="container-fluid">
      <button className="lineL" onClick={() => alert('click')}> hello
        {this.props.value.line}
      </button>
      <button className="lineR" onClick={() => this.props.onClickR}>
        {this.props.value.line2}
      </button>
    </div>
    );
  }
}
export default Lines;