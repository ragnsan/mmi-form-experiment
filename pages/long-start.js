import { Grid, Layout, Section } from "../components/1_Small/Base";
import { PrimaryButtonHref } from "../components/1_Small/Buttons";

export default function longStart() {
  return (
    <>
      <Layout>
        <Section>
          <div className="flex flex-col text-center items-center pt-80">
            <h1 className="text-neutral_900 font-bold mb-8">Velkommen</h1>
            <p className="text-neutral_700 mb-16">
              Takk for at du delter i vårt eksperiment.
              <br /> Vennligst følg instruksene på skjermen. <br />
              Skriv inn ett ord per felt
            </p>
            <PrimaryButtonHref href="long-form" text="Ta meg til skjemaet" />
          </div>
        </Section>
      </Layout>
    </>
  );
}
