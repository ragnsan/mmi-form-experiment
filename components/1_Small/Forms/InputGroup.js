export const InputGroup = ({ name, lblText }) => {
  return (
    <div className="flex flex-col mb-8">
      <label className="text-body_regular text-neutral_700 mb-4" htmlFor={name}>
        {lblText}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="w-100 border-1 border-neutral_300 border-b border-l border-r border-t rounded-rund py-4 pl-8"
      />
    </div>
  );
};
