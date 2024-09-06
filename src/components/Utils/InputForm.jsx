import propTypes from "prop-types";

function InputForm({
  htmlFor,
  labelText,
  type,
  id,
  value,
  onChange,
  placeholder,
}) {
  return (
    <>
      <div className="flex items-center justify-center gap-5">
        <label
          htmlFor={htmlFor}
          className="form-label my-2 text-lg font-semibold text-black dark:text-white"
        >
          {labelText}
        </label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="form-input my-2 w-full rounded-sm bg-white p-1 px-3 text-black outline-none dark:bg-black dark:text-white"
          required={true}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

InputForm.propTypes = {
  htmlFor: propTypes.string.isRequired,
  labelText: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
};

export default InputForm;
