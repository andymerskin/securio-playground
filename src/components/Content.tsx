import tw from "twin.macro"
import { IncidentsChart } from "./IncidentsChart"

export const Content = () => {
  return (
    <div tw="
      relative
      container
      mx-auto
      mt-12
      px-5
      sm:pt-8
      pt-8
      z-10
    ">
      <IncidentsChart css={tw`pb-40`} />
    </div>
  )
};
