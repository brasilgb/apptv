export async function getGraficoData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAFICO}`);
    const jsonData = await res.json();
    return jsonData
}