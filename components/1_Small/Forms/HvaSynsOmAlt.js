import { FourEightTwelve, Grid } from "../Base";
import { LichertRow } from "./LichertRow";
import { HeadingGroup } from "../../2_Big/Header";
export const HvaSynsOmAlt = () => {
  return (
    <Grid>
      <FourEightTwelve>
        <HeadingGroup
          headingTxt="Hvordan liker du…"
          pTxt="Her har vi noen spørsmål om hva du liker eller ikke liker. Vennligst velg en boks per spørsmål."
        />

        <LichertRow
          legend="Videregående skole"
          name="barneskolegang"
          value1="Veldig dårlig"
          value2="Litt dårlig"
          value3="Nøytral"
          value4="Godt"
          value5="Veldig godt"
        />
        <LichertRow
          legend="Donald Trumd"
          name="joe-biden"
          value1="Veldig dårlig"
          value2="Litt dårlig"
          value3="Nøytral"
          value4="Godt"
          value5="Veldig godt"
        />
        <LichertRow
          legend="Mengden nedstengninger under koronapandemien"
          name="regjering-korona"
          value1="Veldig dårlig"
          value2="Litt dårlig"
          value3="Nøytral"
          value4="Godt"
          value5="Veldig godt"
        />
        <LichertRow
          legend="Operabygget"
          name="munch"
          value1="Veldig dårlig"
          value2="Litt dårlig"
          value3="Nøytral"
          value4="Godt"
          value5="Veldig godt"
        />
      </FourEightTwelve>
    </Grid>
  );
};
