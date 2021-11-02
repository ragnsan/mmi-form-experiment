import { AnimatePresence, motion } from "framer-motion";
import {
  FourEightEight,
  Grid,
  Layout,
  Section,
  OneOneOne,
} from "../components/1_Small/Base";
import {
  PrimaryButtonHref,
  SecondaryButtonHref,
} from "../components/1_Small/Buttons";
import { FadeContainer } from "../components/1_Small/FadeContainer";
import { Personalia } from "../components/1_Small/Forms/Personalia";
import { PersonaliaAlt } from "../components/1_Small/Forms/PersonaliaAlt";
import { WizardHeader } from "../components/1_Small/Forms/WizardHeader";

export default function wizardStart() {
  return (
    <FadeContainer>
      <Layout c="mt-32">
        <Grid>
          <OneOneOne></OneOneOne>
          <WizardHeader
            number="1"
            name="Personalia"
            pTxt="Noen generelle spørsmål for å finne litt ut om hvem du er!"
            isHere="true"
          />
          <WizardHeader
            number="2"
            name="Hva vil du bli?"
            pTxt="Noen tilfeldige spørsmål om karriere og inntekt"
          />
          <WizardHeader
            number="3"
            name="Underholdning"
            pTxt="Her ønsker vi å høre om hva du liker å se og høre på"
          />
          <WizardHeader
            number="4"
            name="Tilfeldige spørsmål"
            pTxt="Litt om ditt og litt om datt. Ikke noe spesielt"
          />
          <WizardHeader
            number="5"
            name="Hva syns du om…?"
            pTxt="Her har vi noen spørsmål om hva du liker eller ikke liker"
          />
          <FourEightEight c="lg:col-start-3 py-56">
            <Grid>
              <PersonaliaAlt />
              <div className="flex mt-32">
                <SecondaryButtonHref href="/long-form" text="Forrige" />
                <PrimaryButtonHref href="/wizard-1" text="Neste" />
              </div>
            </Grid>
          </FourEightEight>
        </Grid>
      </Layout>
    </FadeContainer>
  );
}
