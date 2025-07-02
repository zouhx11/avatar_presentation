export function middleware(request) {
  // Check for basic auth
  const auth = request.headers.get('authorization');
  
  if (!auth) {
    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="AI Avatar Workshop"',
      },
    });
  }

  // Parse basic auth
  const [scheme, credentials] = auth.split(' ');
  
  if (scheme !== 'Basic') {
    return new Response('Basic authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="AI Avatar Workshop"',
      },
    });
  }

  const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
  
  // Check credentials (you can change these)
  const VALID_USERNAME = 'workshop';
  const VALID_PASSWORD = 'AvatarWorkshop2025';
  
  if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
    return new Response('Invalid credentials', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="AI Avatar Workshop"',
      },
    });
  }

  // Authentication successful, continue to the page
  return;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}