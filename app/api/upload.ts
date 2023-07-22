import type { NextApiRequest, NextApiResponse } from "next";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    let body = [];

    await new Promise((resolve, reject) => {
        req.on('data', chunk => body.push(chunk));
        req.on('end', resolve);
        req.on('error', reject);
    });
    
    res.status(200).json({status: "success"});
};

export default handler;