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
export const TilfeldigeAlt = () => {
  return (
    <>
      <Grid>
        <FourEightTwelve>
          <HeadingGroup
            headingTxt="Tilfeldige spørsmål"
            pTxt="Noen tilfeldige spørsmål til deg her på tampen"
          />
        </FourEightTwelve>
        <FourFourSix>
          <InputGroup
            name="leke"
            lblText="Skriv en film du likte å se på når du var liten/yngre"
          />
        </FourFourSix>
        <FourFourSix>
          <InputGroup
            name="hobby"
            lblText="Ville du hatt ingen armer eller ingen ben?"
          />
        </FourFourSix>
        <FourFourSix>
          <InputGroup
            name="intervju"
            lblText="Du må synge en duett med en artist. Hvem?"
          />
        </FourFourSix>
        <FourFourSix>
          <InputGroup
            name="billboard"
            lblText="Liker du planter; Ja eller nei?"
          />
        </FourFourSix>
        <FourFourSix></FourFourSix>
        <FourEightTwelve>
          <legend className="mb-16 mt-32 text-neutral_700">
            Du kan bare dra på ferie til ett land i resten av ditt liv. Hvilket?
          </legend>
        </FourEightTwelve>
        <TwoFourThree>
          <RadioGroup name="mat-valg" lblText="Estland" />
        </TwoFourThree>
        <TwoFourThree>
          <RadioGroup name="mat-valg" lblText="Uruguay" />
        </TwoFourThree>
        <TwoFourThree>
          <RadioGroup name="mat-valg" lblText="Jordan" />
        </TwoFourThree>
        <TwoFourThree c="">
          <RadioGroup name="mat-valg" lblText="Russland" />
        </TwoFourThree>
      </Grid>
    </>
  );
};
