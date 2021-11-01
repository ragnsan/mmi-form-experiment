import { ThreeThreeThree } from "../Base";

export const WizardHeader = ({ number, name, pTxt, isHere }) => {
  return (
    <ThreeThreeThree>
      <div className="flex flex-col items-center text-center">
        <div
          className={`${
            isHere != null ? "bg-primary_700" : "bg-neutral_300"
          } w-80 h-80  rounded-circle flex items-center justify-center mb-8`}
        >
          <span
            className={`${
              isHere != null ? "text-white" : "text-neutral_500"
            } text-h3 font-bold`}
          >
            {number}
          </span>
        </div>
        <h2 className="text-h3 text-neutral_900 font-bold">{name}</h2>
        <p className="text-neutral_500 text-body_medium px-16">{pTxt}</p>
      </div>
    </ThreeThreeThree>
  );
};
