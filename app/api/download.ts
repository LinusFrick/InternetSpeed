import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const buffer = Buffer.alloc(1e6);
  res.send(buffer);
};

export default handler;