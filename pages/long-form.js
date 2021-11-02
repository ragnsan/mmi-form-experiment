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

export default function longForm() {
  return (
    <FadeContainer>
      <Layout>
        <Section>
          <Grid>
            <FourEightEight c="lg:col-start-3">
              <Grid>
                {/* 
                Personalia
                */}
                <Personalia />
                <div className="mb-160" />
                {/* 
                Hva vil du bli?
                */}
                <HvaVilDuBli />
                <div className="mb-160" />

                {/* 
              Underholdning
              */}
                <Underholdning />
                <div className="mb-160" />
              </Grid>
            </FourEightEight>
            {/* 
            Hva syns du om…
            */}
            <HvaSynsOm />
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
              <PrimaryButtonHref href="wizard-start" text="Neste skjema" />
            </div>
          </div>
        </Section>
      </Layout>
    </FadeContainer>
  );
}
