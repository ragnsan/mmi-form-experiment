import { HeadingGroup } from "../../2_Big/Header";
import { FourEightTwelve, FourFourFour, FourFourSix, Grid } from "../Base";
import { InputGroup } from "./InputGroup";

export const PersonaliaAlt = () => {
  return (
    <Grid>
      <FourEightTwelve>
        <HeadingGroup
          headingTxt="Personalia"
          pTxt="Noen generelle spørsmål for å finne litt ut om hvem du er! Husk: Vi lagrer ikke noe av denne informasjonen"
        />
      </FourEightTwelve>
      <FourFourSix>
        <InputGroup name="fornavn" lblText="Hva er din mors fornavn?" />
      </FourFourSix>
      <FourFourSix>
        <InputGroup name="etternavn" lblText="Hva er din mors etternavn?" />
      </FourFourSix>
      <FourFourSix>
        <InputGroup name="alder" lblText="Hva er din bostedsadresse?" />
      </FourFourSix>
      <FourFourSix c="">
        <InputGroup
          name="oppvekstby"
          lblText="Hvor vil du bo når du blir gammel?"
        />
      </FourFourSix>
    </Grid>
  );
};
