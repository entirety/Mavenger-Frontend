import { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '@config';
import { ResponseInterface } from './response.interface';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    const loginRes: Response = await fetch(`${API_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data: ResponseInterface = await loginRes.json();

    if (loginRes.ok) {
      res.json(data);
    } else {
      res.status(data.statusCode).json(data);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
