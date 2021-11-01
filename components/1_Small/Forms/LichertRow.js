import { FourEightTwelve, Grid, TwoTwoTwo } from "../Base";
import { LichertGroup } from "./LichertGroup";

export const LichertRow = ({
  name,
  legend,
  value1,
  value2,
  value3,
  value4,
  value5,
}) => {
  return (
    <Grid c="border-b border-1 border-neutral_300 mb-32">
      <TwoTwoTwo className="">
        <legend className="text-body_medium text-neutral_700">{legend}</legend>
      </TwoTwoTwo>
      <TwoTwoTwo>
        <LichertGroup name={name} lblText={value1} />
      </TwoTwoTwo>
      <TwoTwoTwo>
        <LichertGroup name={name} lblText={value2} />
      </TwoTwoTwo>
      <TwoTwoTwo>
        <LichertGroup name={name} lblText={value3} />
      </TwoTwoTwo>
      <TwoTwoTwo>
        <LichertGroup name={name} lblText={value4} />
      </TwoTwoTwo>
      <TwoTwoTwo>
        <LichertGroup name={name} lblText={value5} />
      </TwoTwoTwo>
    </Grid>
  );
};
