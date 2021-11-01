import Link from "next/link";

// TODO: Primary button that you use in the project
const PrimaryButtonStyling = `text-center bg-primary_700 text-white font-bold px-16 py-8 rounded-rund text-body_medium transition hover:bg-primary_900`;
export const PrimaryButtonHref = ({ text, href, iconLeft, iconRight }) => {
  return (
    <Link href={href}>
      <a className={`${PrimaryButtonStyling}`}>
        {iconLeft != null ? <span className="mr-16">{iconLeft}</span> : null}
        {text}
        {iconRight != null ? <span className="ml-16">{iconRight}</span> : null}
      </a>
    </Link>
  );
};

export const PrimaryButtonSubmit = ({ text, href }) => {
  return (
    <div type="button" onClick={onClick} className={`${PrimaryButtonStyling}`}>
      {text}
    </div>
  );
};

// TODO: Secondary button is for any CTA besides the main CTA
export const SecondaryButtonHref = ({ text, href, farge }) => {
  return (
    <Link href={href}>
      <a
        className={`text-center font-bold px-16 py-8 bg-neutral_300 text-neutral_700 rounded-rund text-body_medium mr-16 transition hover:bg-neutral_500 hover:text-white`}
      >
        {text}
      </a>
    </Link>
  );
};
