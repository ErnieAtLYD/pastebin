
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Extract data from the request body
      console.log('gets here!')
      const data = req.body;
      
      // Process the data (e.g., save to database)
      // For now, let's just send it back as a response
      res.status(200).json({ status: 'Success', data });
    } else {
      // Handle any other HTTP methods
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}