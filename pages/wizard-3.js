import {
  FourEightEight,
  FourEightTwelve,
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
import { HvaSynsOm } from "../components/1_Small/Forms/HvaSynsOm";
import { HvaSynsOmAlt } from "../components/1_Small/Forms/HvaSynsOmAlt";
import { HvaVilDuBli } from "../components/1_Small/Forms/HvaVilDuBli";
import { Personalia } from "../components/1_Small/Forms/Personalia";
import { Underholdning } from "../components/1_Small/Forms/Underholdning";
import { WizardHeader } from "../components/1_Small/Forms/WizardHeader";

export default function wizardStart() {
  return (
    <>
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
              isHere="true"
            />
            <WizardHeader
              number="3"
              name="Underholdning"
              pTxt="Her ønsker vi å høre om hva du liker å se og høre på"
              isHere="true"
            />
            <WizardHeader
              number="4"
              name="Tilfeldige spørsmål"
              pTxt="Litt om ditt og litt om datt. Ikke noe spesielt"
              isHere="true"
            />
            <WizardHeader
              number="5"
              name="Hva syns du om…?"
              pTxt="Her har vi noen spørsmål om hva du liker eller ikke liker"
              isHere="true"
            />
            <FourEightTwelve>
              <Grid c="mt-56">
                <HvaSynsOmAlt />
              </Grid>
              <div className="flex mt-32">
                <SecondaryButtonHref href="/wizard-2" text="Forrige" />
                <PrimaryButtonHref href="/alt-long-form" text="Neste" />
              </div>
            </FourEightTwelve>
          </Grid>
        </Layout>
      </FadeContainer>
    </>
  );
}
