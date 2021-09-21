import tw from "twin.macro"
import { IncidentsChart } from "./IncidentsChart"

export const Content = () => {
  return (
    <div tw="container mx-auto px-5 sm:pt-8 pt-8">
      <IncidentsChart css={tw`pb-40`} />
    </div>
  )
};
