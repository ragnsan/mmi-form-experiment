import {
  FourEightEight,
  FourEightTwelve,
  Grid,
  Layout,
  Section,
} from "../components/1_Small/Base";
import { PersonaliaAlt } from "../components/1_Small/Forms/PersonaliaAlt";
import { UnderholdningAlt } from "../components/1_Small/Forms/UnderholdningAlt";
import { HvaSynsOmAlt } from "../components/1_Small/Forms/HvaSynsOmAlt";
import { HvaVilDuBliAlt } from "../components/1_Small/Forms/HvaVilDuBliAlt";
import {
  PrimaryButtonHref,
  SecondaryButtonHref,
} from "../components/1_Small/Buttons";
import { FadeContainer } from "../components/1_Small/FadeContainer";
import { WizardHeader } from "../components/1_Small/Forms/WizardHeader";

export default function altLongForm() {
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
                  <PersonaliaAlt />
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
                  <HvaVilDuBliAlt />
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
                  <UnderholdningAlt />
                </FourEightEight>
                <WizardHeader
                  number="4"
                  name="Tilfeldige spørsmål"
                  pTxt="Litt om ditt og litt om datt. Ikke noe spesielt"
                  isHere="true"
                />
                <FourEightEight c="lg:col-start-4 mb-160">
                  <HvaSynsOmAlt />
                </FourEightEight>
              </Grid>
            </FourEightTwelve>
            {/* 
            Hva syns du om…
            */}
          </Grid>
          <div className="flex flex-col items-center py-160 text-center">
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
              <PrimaryButtonHref href="/finish" text="Neste skjema" />
            </div>
          </div>
        </Section>
      </Layout>
    </FadeContainer>
  );
}
