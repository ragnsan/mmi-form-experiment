import { HeadingGroup } from "../../2_Big/Header";
import { FourEightTwelve, FourFourFour, FourFourSix, Grid } from "../Base";
import { InputGroup } from "./InputGroup";
import { RadioGroup } from "./RadioGroup";

export const HvaVilDuBliAlt = () => {
  return (
    <Grid>
      <FourEightTwelve>
        <HeadingGroup
          headingTxt="Hva vil du bli?"
          pTxt="Noen tilfelddige spørsmål om karriere og inntekt"
        />
      </FourEightTwelve>
      <FourFourSix>
        <InputGroup name="liten" lblText="Hva vil du bli nå som du er stor?" />
      </FourFourSix>
      <FourFourSix>
        <InputGroup
          name="eksotisk"
          lblText="Hvilket sted har du mest lyst til å besøke?"
        />
      </FourFourSix>
      <FourEightTwelve>
        <legend className="text-neutral_700 mt-32">
          Hva er det minste du er villig til å tjene i en jobb?
        </legend>
      </FourEightTwelve>
      <FourFourFour>
        <RadioGroup name="salary" lblText="kr 300 000 - kr 400 000" />
      </FourFourFour>
      <FourFourFour>
        <RadioGroup name="salary" lblText="kr 400 000 - kr 400 000" />
      </FourFourFour>
      <FourFourFour></FourFourFour>
      <FourFourFour>
        <RadioGroup name="salary" lblText="kr 500 000 - kr 700 000" />
      </FourFourFour>
      <FourFourFour>
        <RadioGroup name="salary" lblText="kr 700 000+" />
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
  );
};
