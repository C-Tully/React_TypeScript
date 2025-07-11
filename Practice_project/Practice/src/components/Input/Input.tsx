type InputProps = {
  label: string;
  id: string;
  type?: string;
  labelClassName?: string;
};

export default function Input({
  label,
  labelClassName,
  id,
  type = "text",
}: InputProps) {
  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {" "}
        {label}
      </label>
      <input id={id} type={type} />
    </>
  );
}
