import "./index.scss";

const Input = (props: {
  placeholder?: string;
  onChange?: (value: string) => {};
  multiLine?: boolean;
  rows?: number;
}) => {
  const { placeholder, onChange, multiLine = false, rows = 5 } = props;
  return multiLine ? (
    <textarea className="input" rows={rows} placeholder={placeholder} />
  ) : (
    <input className="input" placeholder={placeholder} />
  );
};

export default Input;
