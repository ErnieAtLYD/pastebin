import { nanoid } from 'nanoid';
import { KV } from '@vercel/kv';

// Initialize KV client
const kv = new KV({
  token: process.env.KV_REST_API_TOKEN,
  projectId: process.env.VERCEL_GIT_REPO_ID
});


export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Extract data from the request body
      console.log('gets here!')
      const data = req.body;
      
      // Generate a NanoID
      const id = nanoid();

      // Save data to Vercel KV
      try {
        await kv.set(id, JSON.stringify(data));
        res.status(200).json({ status: 'Success', data: { id, ...data } });
      } catch (error) {
        console.error('Failed to save to KV:', error);
        res.status(5000).json({ status: 'Error', error: 'Failed to save data to KV' });
      }

      // For now, let's just send it back as a response
      res.status(200).json({ status: 'Success', data: { id, ...data } });
    } else {
      // Handle any other HTTP methods
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}