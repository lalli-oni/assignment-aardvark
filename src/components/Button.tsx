export interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  return (<button onClick={props.onClick}>{props.label}</button>)
}

export default Button