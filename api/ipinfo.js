export default async function handler(req, res) {
    try {
        const visitorIp =
            req.headers["x-forwarded-for"]
            ?.split(",")[0]
            ?.trim();

        const response = await fetch(
            `https://ipinfo.io/${visitorIp}/json?token=${process.env.IPINFO_API_KEY}`
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
