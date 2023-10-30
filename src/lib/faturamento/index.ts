export async function getFaturamentoData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FATURAMENTO}`);
  const jsonData = await res.json();
  return jsonData
}