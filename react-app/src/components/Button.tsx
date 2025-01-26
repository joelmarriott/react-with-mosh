interface Props {
  colour?: "primary" | "secondary" | "danger";
  children: string;
  onPress: () => void;
}

function Button({ colour = "primary", children, onPress }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + colour}
      onClick={() => onPress()}
    >
      {children}
    </button>
  );
}

export default Button;
