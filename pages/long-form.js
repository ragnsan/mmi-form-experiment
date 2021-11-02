import {
  FourEightEight,
  FourEightTwelve,
  FourFourFour,
  FourFourSix,
  Grid,
  Layout,
  Section,
  TwoFourThree,
} from "../components/1_Small/Base";
import {
  PrimaryButtonHref,
  SecondaryButtonHref,
} from "../components/1_Small/Buttons";
import { HvaSynsOm } from "../components/1_Small/Forms/HvaSynsOm";
import { Underholdning } from "../components/1_Small/Forms/Underholdning";
import { InputGroup } from "../components/1_Small/Forms/InputGroup";
import { LichertGroup } from "../components/1_Small/Forms/LichertGroup";
import { LichertRow } from "../components/1_Small/Forms/LichertRow";
import { RadioGroup } from "../components/1_Small/Forms/RadioGroup";
import { HeadingGroup } from "../components/2_Big/Header";
import { HvaVilDuBli } from "../components/1_Small/Forms/HvaVilDuBli";
import { Personalia } from "../components/1_Small/Forms/Personalia";
import { FadeContainer } from "../components/1_Small/FadeContainer";
import { Tilfeldige } from "../components/1_Small/Forms/Tilfeldige";
import { WizardHeader } from "../components/1_Small/Forms/WizardHeader";

export default function longForm() {
  return (
    <FadeContainer>
      <Layout>
        <Section>
          <Grid>
            <FourEightTwelve>
              <Grid>
                {/* 
                Personalia
                */}
                <WizardHeader
                  number="1"
                  name="Personalia"
                  pTxt="Noen generelle spørsmål for å finne litt ut om hvem du er!"
                  isHere="true"
                />
                <FourEightEight c="lg:col-start-4 mb-160">
                  <Personalia />
                </FourEightEight>
                {/* 
                Hva vil du bli?
                */}
                <WizardHeader
                  number="2"
                  name="Hva vil du bli?"
                  pTxt="Noen tilfeldige spørsmål om karriere og inntekt"
                  isHere="true"
                />
                <FourEightEight c="lg:col-start-4 mb-160">
                  <HvaVilDuBli />
                </FourEightEight>

                {/* 
              Underholdning
              */}
                <WizardHeader
                  number="3"
                  name="Underholdning"
                  pTxt="Her ønsker vi å høre om hva du liker å se og høre på"
                  isHere="true"
                />
                <FourEightEight c="lg:col-start-4 mb-160">
                  <Underholdning />
                </FourEightEight>
                <WizardHeader
                  number="4"
                  name="Tilfeldige spørsmål"
                  pTxt="Litt om ditt og litt om datt. Ikke noe spesielt"
                  isHere="true"
                />
                <FourEightEight c="lg:col-start-4 mb-160">
                  <Tilfeldige />
                </FourEightEight>
              </Grid>
            </FourEightTwelve>
            {/* 
            Hva syns du om…
            */}
            <WizardHeader
              number="5"
              name="Hva syns du om…?"
              pTxt="Her har vi noen spørsmål om hva du liker eller ikke liker"
              isHere="true"
            />
            <FourEightEight c="lg:col-start-4 mb-160">
              <HvaSynsOm />
            </FourEightEight>
          </Grid>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-neutral_900 font-bold mb-8">
              Gratulerer! Du har
              <br /> fullført dette skjemaet
            </h2>
            <p className="text-neutral_700 mb-16">
              Vi ønsker nå å stille deg noen spørsmål før vi går <br /> videre
              til neste skjema
            </p>
            <div className="flex">
              <SecondaryButtonHref
                href="https://docs.google.com/forms/d/e/1FAIpQLSfIj1suRhYnACMW-8PuTw_zu7Y4E1lFIn7NOOkDjxFf5NqUqw/viewform?usp=sf_link"
                text="Svare på spørsmål"
              />
              <PrimaryButtonHref href="wizard-start" text="Neste skjema" />
            </div>
          </div>
        </Section>
      </Layout>
    </FadeContainer>
  );
}
