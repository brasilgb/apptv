import ChartEvolucao from "@/components/charts/chartevolucao"
import { getGraficoData } from "@/lib/grafico";
import React from 'react'

type Props = {}

const EvolucaoMes = async (props: Props) => {
  const grafico = await getGraficoData();
  return (
    <div className="bg-gray-100 border-2 border-white p-2 bg-opacity-80 border-opacity-80 mt-3">
    <ChartEvolucao DataJSON={grafico} altura={450} />
  </div>
  )
}

export default EvolucaoMes