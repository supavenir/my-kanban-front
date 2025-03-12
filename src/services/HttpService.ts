

export default class HttpService{
    static async get(url: string): Promise<any>{
        const response = await fetch(url);
        return await response.json();
    }

    static async delete(url: string): Promise<any>{
        const response = await fetch(url, {
            method: "DELETE"
        });
        return await response.json();
    }
}