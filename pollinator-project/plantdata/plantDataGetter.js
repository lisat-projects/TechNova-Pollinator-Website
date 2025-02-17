

export default async function getPlantData(region) {
    const filename = `/${region}_plants.json`
    const response = await fetch(filename);
    const data = response.json();
    return data;
}
