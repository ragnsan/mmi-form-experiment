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
export const Underholdning = () => {
  return (
    <>
      <Grid>
        <FourEightTwelve>
          <HeadingGroup
            headingTxt="Underholdning"
            pTxt="Her ønsker vi å vite om hva du liker å se og høre på"
          />
        </FourEightTwelve>
        <FourFourSix>
          <InputGroup name="tv-serie" lblText="Hva er din favoritt TV-serie?" />
        </FourFourSix>
        <FourFourSix>
          <InputGroup
            name="ikke-liker-film"
            lblText="Hvilken film, som du har sett, liker du minst?"
          />
        </FourFourSix>
        <FourFourSix>
          <InputGroup name="artist" lblText="Hva er din favorittartist?" />
        </FourFourSix>
        <FourFourSix></FourFourSix>
        <FourEightTwelve>
          <legend className="mb-16 mt-32 text-neutral_700">
            Hvem av disse vill du tatt med på en øye øy?
          </legend>
        </FourEightTwelve>
        <TwoFourThree>
          <RadioGroup name="ode-oy" lblText="Charter-Svein" />
        </TwoFourThree>
        <TwoFourThree>
          <RadioGroup name="ode-oy" lblText="Trygve Slagsvold Vedum" />
        </TwoFourThree>
        <TwoFourThree>
          <RadioGroup name="ode-oy" lblText="Dronning Sonja" />
        </TwoFourThree>
        <TwoFourThree c="">
          <RadioGroup name="ode-oy" lblText="Marit Bjørgen" />
        </TwoFourThree>
      </Grid>
    </>
  );
};
