const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export async function fetchTemplates(category?: string) {
  const url = new URL(`${API_URL}/templates`);
  if (category) {
    url.searchParams.append('category', category);
  }
  
  const res = await fetch(url.toString(), {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch templates');
  }
  
  const data = await res.json();
  return data.templates;
}

export async function fetchLikedTemplates() {
  const token = localStorage.getItem('token');
  if (!token) return [];

  const res = await fetch(`${API_URL}/templates/user/liked`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch liked templates');
  }

  return res.json();
}

export async function login(data: any) {
  const res = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Login failed');
  }
  
  return res.json();
}

export async function signup(data: any) {
  const res = await fetch(`${API_URL}/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Signup failed');
  }
  
  return res.json();
}

export async function getMe(token: string) {
  const res = await fetch(`${API_URL}/users/profile`, {
    headers: { 
      'Authorization': `Bearer ${token}` 
    },
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch profile');
  }
  
  return res.json();
}

export async function incrementView(templateId: string) {
  const token = localStorage.getItem('token');
  if (!token) return;

  const res = await fetch(`${API_URL}/templates/${templateId}/view`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    throw new Error('Failed to increment view');
  }
  
  return res.json();
}

export async function toggleLike(templateId: string) {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Please login to like templates');

  const res = await fetch(`${API_URL}/templates/${templateId}/like`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    throw new Error('Failed to toggle like');
  }
  
  return res.json();
}

export async function getTemplatesAdmin() {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/templates/admin/all`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch templates');
  }

  return res.json();
}

export async function addTemplate(template: any) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/templates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(template)
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to add template');
  }

  return res.json();
}

export async function editTemplate(id: string, updates: any) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/templates/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(updates)
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to edit template');
  }

  return res.json();
}

export async function deleteTemplate(id: string) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/templates/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to delete template');
  }

  return res.json();
}

export async function getPresignedUrl(filename: string, fileType: string) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/uploads/presign`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ filename, fileType })
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to get presigned URL');
  }

  return res.json();
}

export async function uploadFileToS3(url: string, file: File) {
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type
    },
    body: file
  });

  if (!res.ok) {
    throw new Error('Failed to upload file to S3');
  }

  return res;
}
