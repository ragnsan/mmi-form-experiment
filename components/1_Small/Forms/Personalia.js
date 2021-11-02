import { HeadingGroup } from "../../2_Big/Header";
import { FourEightTwelve, FourFourFour, FourFourSix, Grid } from "../Base";
import { InputGroup } from "./InputGroup";

export const Personalia = () => {
  return (
    <>
      <Grid>
        <FourEightTwelve>
          <HeadingGroup
            headingTxt="Personalia"
            pTxt="Noen generelle spørsmål for å finne litt ut om hvem du er! Husk: Vi lagrer ikke noe av denne informasjonen"
          />
        </FourEightTwelve>
        <FourFourSix>
          <InputGroup name="fornavn" lblText="Hva er ditt fornavn?" />
        </FourFourSix>
        <FourFourSix>
          <InputGroup name="etternavn" lblText="Hva er ditt etter?" />
        </FourFourSix>
        <FourFourSix>
          <InputGroup name="alder" lblText="Hvor gammel er du?" />
        </FourFourSix>
        <FourFourSix c="">
          <InputGroup name="oppvekstby" lblText="Hvilken by vokste du opp i?" />
        </FourFourSix>
      </Grid>
    </>
  );
};
