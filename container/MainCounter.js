import React, { Component } from "react";
import CounterOutput from "../components/CounterOutput";
import CounterControl from "../components/CounterControl";
import { connect } from "react-redux"; // เชื่อม component เข้ากับ Redux ของระบบ
import * as actionCreator from "../store/actions/actionCreator";

class MainCounter extends Component {
  /* clickHandler = () => {
    alert("hello");
  };
  anotherClickHandler = () => {
    alert("hi");
  }; */

  // clicked ต้องการฟังค์ชั่น
  // label Incease กับ Decrease เป็น function อยู่แล้ว
  render() {
    return (
      <div>
        <CounterOutput value={this.props.myCounter} />
        <CounterControl label="Increase" clicked={this.props.increaseCounter} />
        <CounterControl label="Decrease" clicked={this.props.decreaseCounter} />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.addCounter(5)}
        />
        <CounterControl
          label="Subtract 8"
          clicked={() => this.props.subtractCounter(8)}
        />
        <CounterControl
          label="Subtract 40"
          clicked={() => this.props.subtractCounter(40)}
        />
      </div>
    );
  }
}

// ดึงข้อมูลจาก central store มาเปลี่ยนชื่อเป็น myCounter
const mapStateToProps = (state) => {
  return { myCounter: state.counter.counter };
};

// ส่ง Action ออกไป
const mapDispatchToProps = (dispatch) => {
  return {
    addCounter: (val) => dispatch(actionCreator.addCounter(val)),
    subtractCounter: (val) => dispatch(actionCreator.subtractCounter(val)),
    increaseCounter: () => dispatch(actionCreator.increaseCounter()),
    decreaseCounter: () => dispatch(actionCreator.decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCounter);
