export const LichertGroup = ({ name, lblText }) => {
  return (
    <fieldset className="flex mb-32">
      <div className="flex flex-col items-center">
        <input
          type="radio"
          name={name}
          className="border-primary_700 border-2 h-24 w-24 text-primary_700 focus:ring-primary_700 mb-8"
        />
        <label htmlFor={name} className="text-neutral_700">
          {lblText}
        </label>
      </div>
    </fieldset>
  );
};
