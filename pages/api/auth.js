// pages/api/auth.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
  
      // Mock authentication check
      if (username === 'admin' && password === 'password') {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  