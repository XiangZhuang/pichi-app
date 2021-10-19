import "./index.scss";

const Input = (props: {
  placeholder?: string;
  onChange?: (value: string) => void;
  multiLine?: boolean;
  rows?: number;
  validator?: (value?: string) => boolean;
  value?: string;
}) => {
  const {
    placeholder,
    onChange,
    multiLine = false,
    rows = 5,
    value,
    validator,
  } = props;
  const inputProps = {
    className: `input ${!validator || validator?.(value) ? "" : "error"}`,
    placeholder,
    value,
    onChange: (evt: any) => onChange?.(evt.target.value),
  };
  return multiLine ? (
    <textarea rows={rows} {...inputProps} />
  ) : (
    <input {...inputProps} />
  );
};

export default Input;
