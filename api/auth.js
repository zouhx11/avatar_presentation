export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Check for basic auth
  const auth = req.headers.authorization;
  
  if (!auth) {
    res.setHeader('WWW-Authenticate', 'Basic realm="AI Avatar Workshop"');
    res.status(401).json({ error: 'Authentication required' });
    return;
  }

  // Parse basic auth
  const [scheme, credentials] = auth.split(' ');
  
  if (scheme !== 'Basic') {
    res.status(401).json({ error: 'Basic authentication required' });
    return;
  }

  const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
  
  // Check credentials (you can change these)
  const VALID_USERNAME = 'workshop';
  const VALID_PASSWORD = 'AvatarWorkshop2025';
  
  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    // Authentication successful - serve the slides
    const fs = require('fs');
    const path = require('path');
    
    try {
      // Try to serve the index.html from dist directory
      const indexPath = path.join(process.cwd(), 'dist', 'index.html');
      const indexHtml = fs.readFileSync(indexPath, 'utf8');
      
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(indexHtml);
    } catch (error) {
      // Fallback if dist doesn't exist
      res.status(200).json({ 
        message: 'Authentication successful', 
        note: 'Please build the slides first with: npm run build' 
      });
    }
  } else {
    res.setHeader('WWW-Authenticate', 'Basic realm="AI Avatar Workshop"');
    res.status(401).json({ error: 'Invalid credentials' });
  }
}