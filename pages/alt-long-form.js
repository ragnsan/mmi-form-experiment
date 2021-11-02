import {
  FourEightEight,
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

export default function altLongForm() {
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
                <PersonaliaAlt />

                <div className="mb-160" />
                {/* 
                Hva vil du bli?
                */}
                <HvaVilDuBliAlt />
                <div className="mb-160" />

                {/* 
              Underholdning
              */}
                <UnderholdningAlt />
                <div className="mb-160" />
              </Grid>
            </FourEightEight>
            {/* 
            Hva syns du om…
            */}
            <HvaSynsOmAlt />
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
