export const RadioGroup = ({ name, lblText, checked }) => {
  return (
    <fieldset className="flex flex-col mb-8">
      <div className="flex">
        <input
          type="radio"
          name={name}
          className="border-primary_700 border-2 h-24 w-24 text-primary_700 focus:ring-primary_700 mr-8 "
        />
        <label htmlFor={name} className="text-neutral_700">
          {lblText}
        </label>
      </div>
    </fieldset>
  );
};
