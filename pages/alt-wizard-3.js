import {
  FourEightEight,
  FourEightTwelve,
  Grid,
  Layout,
  Section,
} from "../components/1_Small/Base";
import {
  PrimaryButtonHref,
  SecondaryButtonHref,
} from "../components/1_Small/Buttons";
import { FadeContainer } from "../components/1_Small/FadeContainer";
import { HvaSynsOm } from "../components/1_Small/Forms/HvaSynsOm";
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
              name="Hva syns du om…?"
              pTxt="Her har vi noen spørsmål om hva du liker eller ikke liker. Vennligst velg en boks per spørsmål."
              isHere="true"
            />
            <FourEightTwelve>
              <Grid>
                <HvaSynsOm />
              </Grid>
            </FourEightTwelve>
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSdeUnYg_K9fz5R5WnWxq7Un9Ri6eSZ1Y2ZIjTrdDgHPGKUfxw/viewform?usp=sf_link"
                text="Svare på spørsmål"
              />
              <PrimaryButtonHref href="/alt-long-form" text="Neste skjema" />
            </div>
          </div>
        </Layout>
      </FadeContainer>
    </>
  );
}
