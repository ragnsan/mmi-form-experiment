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
export const Tilfeldige = () => {
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
            lblText="Hva var favorittleken din når du var liten"
          />
        </FourFourSix>
        <FourFourSix>
          <InputGroup
            name="hobby"
            lblText="Ville du heller hatt 10 hobbyer eller en lidenskap"
          />
        </FourFourSix>
        <FourFourSix>
          <InputGroup
            name="intervju"
            lblText="Hvis du kunne intervjuet en kjent person, hvem ville det vært?"
          />
        </FourFourSix>
        <FourFourSix>
          <InputGroup
            name="billboard"
            lblText="Hvis du kunne skrevet ett ord på en plakat som alle i verden ville sett; Hva skriver du?"
          />
        </FourFourSix>
        <FourFourSix></FourFourSix>
        <FourEightTwelve>
          <legend className="mb-16 mt-32 text-neutral_700">
            Du kan bare spise en av disse tingene for resten av livet ditt. Hva
            velger du?
          </legend>
        </FourEightTwelve>
        <TwoFourThree>
          <RadioGroup name="mat-valg" lblText="Pizza" />
        </TwoFourThree>
        <TwoFourThree>
          <RadioGroup name="mat-valg" lblText="Kylling og ris" />
        </TwoFourThree>
        <TwoFourThree>
          <RadioGroup name="mat-valg" lblText="Hamburger" />
        </TwoFourThree>
        <TwoFourThree c="">
          <RadioGroup name="mat-valg" lblText="Havregrøt" />
        </TwoFourThree>
      </Grid>
    </>
  );
};
