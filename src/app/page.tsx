import { getFaturamentoData } from '@/lib/faturamento';
import { getGraficoData } from "@/lib/grafico";
import Kpi from "@/components/kpi";
import ChartEvolucao from "@/components/charts/chartevolucao"
import ProgressBar from "@/components/charts/progressBar";

export default async function Home() {

  const faturamento = await getFaturamentoData();
  const grafico = await getGraficoData();

  return (
    <main>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-100 border-2 border-white p-2 bg-opacity-80 border-opacity-80">
          <div className="mb-2">
            <h1 className="text-base font-bold text-blue-900 uppercase">Vendas do dia: {faturamento[0].Dia}</h1>
          </div>
          <div className="flex">
            <div className="bg-white shadow w-36 mr-2">
              <ProgressBar
                data={(parseFloat(faturamento[0].PerformanceDia) * 100)}
                title="Venda dia"
                titleClass={"text-blue-900"}
                barColor="#009DE0"
                labelEnabled={true}
              />
            </div>
            <div className="grid grid-rows-4 gap-2 flex-1">
              <Kpi title={"Meta"} classTitle="text-sm text-gray-600" value={faturamento[0].MetaDia} classValue="text-3xl font-bold text-green-700" />
              <Kpi title={"Vendas"} classTitle="text-sm text-gray-600" value={faturamento[0].VendaDia} classValue="text-3xl font-bold text-blue-500" />
              <Kpi title={"Performance"} classTitle="text-sm text-gray-600" value={(parseFloat(faturamento[0].PerformanceDia) * 100).toFixed(2) + '%'} classValue="text-3xl font-bold text-red-500" />
              <Kpi title={"Diferença"} classTitle="text-sm text-gray-600" value={faturamento[0].DiferencaDia} classValue="text-3xl font-bold text-red-500" />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 border-2 border-white p-2 bg-opacity-80 border-opacity-80">
          <div className="mb-2">
            <h1 className="text-base font-bold text-blue-900 uppercase">Vendas do mês: {faturamento[0].Mes}</h1>
          </div>
          <div className="flex">
            <div className="bg-white shadow mr-2">
              <div className="flex items-end justify-start shadow">
                <div className="w-36">
                  <ProgressBar
                    data={(parseFloat(faturamento[0].MetaAcumuladaMes) * 100)}
                    title="Acumulado"
                    titleClass={"text-base text-blue-900"}
                    barColor="#009DE0"
                    labelEnabled={true}
                  />
                </div>
                <div className="w-24">
                  <ProgressBar
                    data={(parseFloat(faturamento[0].PerformanceMes) * 100)}
                    title="Venda"
                    titleClass={"text-base text-blue-900"}
                    barColor="#009DE0"
                    labelEnabled={false}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-rows-4 gap-2 flex-1">
              <Kpi title={"Meta"} classTitle="text-sm text-gray-600" value={faturamento[0].MetaMes} classValue="text-3xl font-bold text-green-700" />
              <Kpi title={"Vendas"} classTitle="text-sm text-gray-600" value={faturamento[0].VendaMes} classValue="text-3xl font-bold text-blue-500" />
              <div className="grid grid-cols-2 gap-2">
                <Kpi title={"Vendas"} classTitle="text-sm text-gray-600" value={(parseFloat(faturamento[0].PerformanceMes) * 100).toFixed(2) + '%'} classValue="text-3xl font-bold text-red-500" />
                <Kpi title={"Meta Acum."} classTitle="text-sm text-gray-600" value={(parseFloat(faturamento[0].MetaAcumuladaMes) * 100).toFixed(2) + '%'} classValue="text-3xl font-bold text-red-500" />
              </div>
              <Kpi title={"Diferença"} classTitle="text-sm text-gray-600" value={faturamento[0].DiferencaMes} classValue="text-3xl font-bold text-red-500" />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 border-2 border-white p-2 bg-opacity-80 border-opacity-80">
          <div className="mb-2">
            <h1 className="text-base font-bold text-blue-900 uppercase">Vendas do ano: {faturamento[0].Ano}</h1>
          </div>
          <div className="flex">
            <div className="bg-white shadow w-36 mr-2">
              <ProgressBar
                data={(parseFloat(faturamento[0].PerformanceAno) * 100)}
                title="Venda dia"
                titleClass={" text-blue-900"}
                barColor="#009DE0"
                labelEnabled={true}
              />
            </div>
            <div className="grid grid-rows-4 gap-2 flex-1">
              <Kpi title={"Meta"} classTitle="text-sm text-gray-600" value={faturamento[0].MetaAcumuladaAno} classValue="text-3xl font-bold text-green-700" />
              <Kpi title={"Vendas"} classTitle="text-sm text-gray-600" value={faturamento[0].VendaAno} classValue="text-3xl font-bold text-blue-500" />
              <Kpi title={"Performance"} classTitle="text-sm text-gray-600" value={(parseFloat(faturamento[0].PerformanceAno) * 100).toFixed(2) + '%'} classValue="text-3xl font-bold text-red-500" />
              <Kpi title={"Diferença"} classTitle="text-sm text-gray-600" value={faturamento[0].DiferencaAno} classValue="text-3xl font-bold text-red-500" />
            </div>
          </div>
        </div>

      </div>
      <div className="bg-gray-100 border-2 border-white p-2 bg-opacity-80 border-opacity-80 mt-3">
        <ChartEvolucao DataJSON={grafico} altura={455} />
      </div>
    </main>
  )
}