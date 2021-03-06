import { FourEightTwelve } from "../Base";
import { LichertRow } from "./LichertRow";
import { HeadingGroup } from "../../2_Big/Header";
export const HvaSynsOm = () => {
  return (
    <>
      <FourEightTwelve>
        <HeadingGroup
          headingTxt="Hvordan liker du…"
          pTxt="Her har vi noen spørsmål om hva du liker eller ikke liker. Vennligst velg en boks per spørsmål."
        />

        <LichertRow
          legend="Din barneskolegang"
          name="barneskolegang"
          value1="Veldig dårlig"
          value2="Litt dårlig"
          value3="Nøytral"
          value4="Godt"
          value5="Veldig godt"
        />
        <LichertRow
          legend="Joe Biden"
          name="joe-biden"
          value1="Veldig dårlig"
          value2="Litt dårlig"
          value3="Nøytral"
          value4="Godt"
          value5="Veldig godt"
        />
        <LichertRow
          legend="Regjeringens ledelse under koronapandemien"
          name="regjering-korona"
          value1="Veldig dårlig"
          value2="Litt dårlig"
          value3="Nøytral"
          value4="Godt"
          value5="Veldig godt"
        />
        <LichertRow
          legend="Det nye munchmuseet"
          name="munch"
          value1="Veldig dårlig"
          value2="Litt dårlig"
          value3="Nøytral"
          value4="Godt"
          value5="Veldig godt"
        />
      </FourEightTwelve>
    </>
  );
};
