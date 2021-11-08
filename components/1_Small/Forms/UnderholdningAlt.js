import {
  FourEightEight,
  FourEightTwelve,
  FourFourSix,
  Grid,
  TwoFourThree,
} from "../Base";
import { InputGroup } from "./InputGroup";
import { RadioGroup } from "./RadioGroup";
import { HeadingGroup } from "../../2_Big/Header";
export const UnderholdningAlt = () => {
  return (
    <Grid>
      <FourEightTwelve>
        <HeadingGroup
          headingTxt="Underholdning"
          pTxt="Her ønsker vi å vite om hva du liker å se og høre på"
        />
      </FourEightTwelve>
      <FourFourSix>
        <InputGroup name="tv-serie" lblText="Hva er din favorittfilm?" />
      </FourFourSix>
      <FourFourSix>
        <InputGroup
          name="ikke-liker-film"
          lblText="Hvilken TV-serie, som du har sett, liker du minst?"
        />
      </FourFourSix>
      <FourFourSix>
        <InputGroup name="artist" lblText="Hvilken artist liker du minst?" />
      </FourFourSix>
      <FourFourSix></FourFourSix>
      <FourEightTwelve>
        <legend className="mb-16 mt-32 text-neutral_700">
          Hvem av disse vill du tatt med på en øye øy?
        </legend>
      </FourEightTwelve>
      <TwoFourThree>
        <RadioGroup name="ode-oy" lblText="Leonardo Da Vinci" />
      </TwoFourThree>
      <TwoFourThree>
        <RadioGroup name="ode-oy" lblText="Christopher Columbus" />
      </TwoFourThree>
      <TwoFourThree>
        <RadioGroup name="ode-oy" lblText="Isaac Newton" />
      </TwoFourThree>
      <TwoFourThree c="">
        <RadioGroup name="ode-oy" lblText="Albert Einstein" />
      </TwoFourThree>
    </Grid>
  );
};
