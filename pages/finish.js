import { Layout } from "../components/1_Small/Base";
import {
  PrimaryButtonHref,
  SecondaryButtonHref,
} from "../components/1_Small/Buttons";

export default function wizardFinish() {
  return (
    <Layout>
      <div className="flex flex-col items-center py-160 text-center">
        <h2 className="text-neutral_900 font-bold mb-8">
          Nå nærmer vi oss slutten!
          <br /> Bare ett spørsmål til
        </h2>
        <p className="text-neutral_700 mb-16">
          Av de to skjemaene du nettopp har fullført; <br /> hvilket likte du
          best?
        </p>
      </div>
    </Layout>
  );
}
