import { default as handler } from '../dist/server/index.js';

export default async (req, res) => {
  try {
    // Build the request URL
    const url = new URL(req.url, `http://${req.headers.host}`);
    
    // Create a fetch-compatible request
    let body = null;
    if (!['GET', 'HEAD'].includes(req.method)) {
      body = Buffer.isBuffer(req.body) ? req.body : JSON.stringify(req.body);
    }

    const request = new Request(url.toString(), {
      method: req.method,
      headers: req.headers,
      body,
    });

    // Call the TanStack Start handler
    const response = await handler.fetch(request, {}, {});

    // Set response status
    res.status(response.status);

    // Set response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send response body
    if (response.body) {
      const reader = response.body.getReader();
      let done = false;
      while (!done) {
        const { done: _done, value } = await reader.read();
        done = _done;
        if (value) {
          res.write(value);
        }
      }
    }

    res.end();
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
