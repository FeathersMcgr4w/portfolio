export default async function handler(req, res) {
    try {
        const response = await fetch(
            `https://ipinfo.io/json?token=${process.env.IPINFO_API_KEY}`
        );
        const data = await response.json();
        res.status(200).json(data);
    }

    catch(error){
        res.status(500).json({
            error: "IPInfo Error"
        });
    }
}