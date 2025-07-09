type InputProps = {
  label: string;
  id: string;
  type?: string;
};

export default function Input({ label, id, type = "text" }: InputProps) {
  return (
    <p>
      <label htmlFor={id}> {label}</label>
      <input id={id} type={type} />
    </p>
  );
}
