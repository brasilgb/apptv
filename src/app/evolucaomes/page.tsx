import ChartEvolucao from "@/components/charts/chartevolucao"
import { getGraficoData } from "@/lib/grafico";

const EvolucaoMes = async () => {
  const grafico = await getGraficoData();
  return (
    <div className="bg-gray-100 border-2 border-white p-2 bg-opacity-80 border-opacity-80">
      <ChartEvolucao DataJSON={grafico} altura={954} />
    </div>
  )
}

export default EvolucaoMes