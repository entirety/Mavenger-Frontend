import { NextApiRequest, NextApiResponse } from 'next';

import { API_URL } from '@config';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const hwRes = await fetch(`${API_URL}/hello-world`);

    const data = await hwRes.json();

    if (hwRes.ok) {
      res.status(200).json(data.message);
    } else {
      res.status(400).json({ error: 'Bad Request' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
