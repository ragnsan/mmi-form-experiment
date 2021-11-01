export const HeadingGroup = ({ headingTxt, pTxt }) => {
  return (
    <div className="flex flex-col mb-32">
      <h2 className="text-neutral_900 font-bold">{headingTxt}</h2>
      <p className="text-neutral_700">{pTxt}</p>
    </div>
  );
};
