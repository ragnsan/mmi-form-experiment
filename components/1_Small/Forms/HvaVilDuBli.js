import { HeadingGroup } from "../../2_Big/Header";
import { FourEightTwelve, FourFourFour, FourFourSix, Grid } from "../Base";
import { InputGroup } from "./InputGroup";
import { RadioGroup } from "./RadioGroup";

export const HvaVilDuBli = () => {
  return (
    <>
      <Grid>
        <FourEightTwelve>
          <HeadingGroup
            headingTxt="Hva vil du bli?"
            pTxt="Noen tilfelddige spørsmål om karriere og inntekt"
          />
        </FourEightTwelve>
        <FourFourSix>
          <InputGroup
            name="liten"
            lblText="Hva ville du bli når du var liten?"
          />
        </FourFourSix>
        <FourFourSix>
          <InputGroup
            name="eksotisk"
            lblText="Hva er det mest eksotiske stedet du har vært??"
          />
        </FourFourSix>
        <FourEightTwelve>
          <legend className="text-neutral_700 mt-32">
            Hva er din realistiske drømme-årslønn?
          </legend>
        </FourEightTwelve>
        <FourFourFour>
          <RadioGroup name="salary" lblText="kr 300 000 - kr 500 000" />
        </FourFourFour>
        <FourFourFour>
          <RadioGroup name="salary" lblText="kr 500 000 - kr 800 000" />
        </FourFourFour>
        <FourFourFour></FourFourFour>
        <FourFourFour>
          <RadioGroup name="salary" lblText="kr 800 000 - kr 1 500 000" />
        </FourFourFour>
        <FourFourFour>
          <RadioGroup name="salary" lblText="kr 1 500 000+" />
        </FourFourFour>

        <FourEightTwelve>
          <legend className="text-neutral_700 mt-32">
            Hva tror du skattesatsen blir på den lønna?
          </legend>
        </FourEightTwelve>
        <FourFourFour>
          <RadioGroup name="skatt" lblText="25% - 30%" />
        </FourFourFour>
        <FourFourFour>
          <RadioGroup name="skatt" lblText="30% - 35%" />
        </FourFourFour>
        <FourFourFour></FourFourFour>
        <FourFourFour>
          <RadioGroup name="skatt" lblText="35% - 40%" />
        </FourFourFour>
        <FourFourFour c="">
          <RadioGroup name="skatt" lblText="40%+" />
        </FourFourFour>
      </Grid>
    </>
  );
};
