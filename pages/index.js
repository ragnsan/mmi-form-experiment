import { NextSeo } from "next-seo";
import {
  FourEightEight,
  FourEightFive,
  FourEightTwelve,
  FourFourFour,
  FourFourSix,
  FourFourThree,
  Grid,
  Layout,
  Section,
  TwoFourThree,
} from "../components/1_Small/Base";

import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import Image from "next/image";
import { InputGroup } from "../components/1_Small/Forms/InputGroup";
import {
  PrimaryButtonHref,
  SecondaryButtonHref,
} from "../components/1_Small/Buttons";
import { RadioGroup } from "../components/1_Small/Forms/RadioGroup";
import { HeadingGroup } from "../components/2_Big/Header";
import { LichertGroup } from "../components/1_Small/Forms/LichertGroup";
import { LichertRow } from "../components/1_Small/Forms/LichertRow";

export default function Home() {
  return (
    <>
      <Layout>
        <Section>
          <div className="flex flex-col items-center">
            <PrimaryButtonHref
              href="/long-form"
              text="Long form - Wizard form"
            />
            <div className="my-8" />
            <PrimaryButtonHref
              href="/alt-wizard-start"
              text="Wizard form - Long form"
            />
          </div>
        </Section>
      </Layout>
    </>
  );
}
