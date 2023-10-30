import ProgressBar from "@/components/charts/progressBar"
import Kpi from "@/components/kpi";
import { getFaturamentoData } from "@/lib/faturamento";
import React from 'react'

const VendasDia = async () => {
  const faturamento = await getFaturamentoData();

  return (
    <div className="bg-gray-100 border-2 border-white p-2 bg-opacity-80 border-opacity-80 min-h-[90vh]">
    <div className="mb-2">
      <h1 className="text-4xl font-bold text-blue-900 uppercase">Vendas do dia: {faturamento[0].Dia}</h1>
    </div>
    <div className="flex">
      <div className="bg-white shadow mr-2 w-1/3">
        <ProgressBar
          data={(parseFloat(faturamento[0].PerformanceDia) * 100)}
          title="Venda dia"
          titleClass={"text-2xl text-blue-900"}
          barColor="#009DE0"
          labelEnabled={true}
          heightgr={860}
        />
      </div>
      <div className="grid grid-rows-4 gap-2 flex-1">
        <Kpi title={"Meta"} classTitle="text-4xl text-gray-600" value={faturamento[0].MetaDia} classValue="text-9xl font-bold text-green-700" />
        <Kpi title={"Vendas"} classTitle="text-4xl text-gray-600" value={faturamento[0].VendaDia} classValue="text-9xl font-bold text-blue-500" />
        <Kpi title={"Performance"} classTitle="text-4xl text-gray-600" value={(parseFloat(faturamento[0].PerformanceDia) * 100).toFixed(2) + '%'} classValue="text-9xl font-bold text-red-500" />
        <Kpi title={"Diferença"} classTitle="text-4xl text-gray-600" value={faturamento[0].DiferencaDia} classValue="text-9xl font-bold text-red-500" />
      </div>
    </div>
  </div>
  )
}

export default VendasDia