type CheckboxType = {
  key?: string;
  name: string;
  label: string;
  type: any;
  changeParam: any;
};

const Checkbox = ({ key, name, label, changeParam, type }: CheckboxType) => (
  <label
    htmlFor={label + "-" + name}
    className={`checkbox ${type ? "checkbox--" + type : ""}`}
  >
    <input
      name={name}
      type="checkbox"
      id={label + "-" + name}
      onClick={() => changeParam(type)}
    />
    <span className="checkbox__check"></span>
    <p>{label}</p>
  </label>
);

export default Checkbox;
