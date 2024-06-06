export async function getCompanies() {
    try{
        const response = await fetch("https://fake-api.tractian.com/companies");
        return response.json();
    }catch (error){
        console.log(error);
    }
}

export async function getLocations(companyId: string) {
    try{
        const response = await fetch(`https://fake-api.tractian.com/companies/${companyId}/locations`);
        return response.json();
    }catch (error){
        console.log(error);
    }
}

export async function getAssets(companyId: string) {
    try{
        const response = await fetch(`https://fake-api.tractian.com/companies/${companyId}/assets`);
        return response.json();
    }catch (error){
        console.log(error);
    }
}