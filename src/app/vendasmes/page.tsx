import ProgressBar from "@/components/charts/progressBar"
import Kpi from "@/components/kpi";
import { getFaturamentoData } from "@/lib/faturamento";
import React from 'react'

const VendasMes = async () => {
  const faturamento = await getFaturamentoData();

  return (
    <div className="bg-gray-100 border-2 border-white p-2 bg-opacity-80 border-opacity-80">
          <div className="mb-2">
            <h1 className="text-4xl font-bold text-blue-900 uppercase">Vendas do mês: {faturamento[0].Mes}</h1>
          </div>
          <div className="flex">
            <div className="bg-white shadow mr-2 w-1/3">
              <div className="flex items-start justify-start">
                <div className="w-[55%]">
                  <ProgressBar
                    data={(parseFloat(faturamento[0].MetaAcumuladaMes) * 100)}
                    title="Acumulado"
                    titleClass={"text-2xl text-blue-900"}
                    barColor="#009DE0"
                    labelEnabled={true}
                    heightgr={860}
                  />
                </div>
                <div className="w-[45%]">
                  <ProgressBar
                    data={(parseFloat(faturamento[0].PerformanceMes) * 100)}
                    title="Venda"
                    titleClass={"text-2xl text-blue-900"}
                    barColor="#009DE0"
                    labelEnabled={false}
                    heightgr={860}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-rows-4 gap-2 flex-1">
              <Kpi title={"Meta"} classTitle="text-4xl text-gray-600" value={faturamento[0].MetaMes} classValue="text-9xl font-bold text-green-700" />
              <Kpi title={"Vendas"} classTitle="text-4xl text-gray-600" value={faturamento[0].VendaMes} classValue="text-9xl font-bold text-blue-500" />
              <div className="grid grid-cols-2 gap-2">
                <Kpi title={"Vendas"} classTitle="text-4xl text-gray-600" value={(parseFloat(faturamento[0].PerformanceMes) * 100).toFixed(2) + '%'} classValue="text-9xl font-bold text-red-500" />
                <Kpi title={"Meta Acum."} classTitle="text-4xl text-gray-600" value={(parseFloat(faturamento[0].MetaAcumuladaMes) * 100).toFixed(2) + '%'} classValue="text-9xl font-bold text-red-500" />
              </div>
              <Kpi title={"Diferença"} classTitle="text-4xl text-gray-600" value={faturamento[0].DiferencaMes} classValue="text-9xl font-bold text-red-500" />
            </div>
          </div>
        </div>
  )
}

export default VendasMes