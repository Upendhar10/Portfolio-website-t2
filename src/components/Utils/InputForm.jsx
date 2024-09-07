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
      <fieldset className="my-2 rounded-md border-2">
        <legend
          htmlFor={htmlFor}
          className="form-label px-2 text-lg font-semibold text-black dark:text-white"
        >
          {labelText}
        </legend>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="form-input my-2 w-full rounded-sm bg-white p-1 px-3 text-black outline-none dark:bg-black dark:text-white"
          required={true}
          placeholder={placeholder}
        />
      </fieldset>
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
