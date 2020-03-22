import * as React from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

interface State {
  currentEnthusiasm: number;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}

// class Hello extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
//   }

//   updateEnthusiasm(currentEnthusiasm: number) {
//     this.setState({ currentEnthusiasm });
//   }

//   onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
//   onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

//   render() {
//     const { name } = this.props;

//     if (this.state.currentEnthusiasm <= 0) {
//       throw new Error("You could be a little more enthusiastic. :D");
//     }

//     return (
//       <div className="hello">
//         <div className="greeting">
//           Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
//         </div>
//         <button onClick={this.onDecrement}>-</button>
//         <button onClick={this.onIncrement}>+</button>
//       </div>
//     );
//   }
// }

export default Hello;
