// Article APIs
export async function getArticles() {
  return apiRequest('/api/articles', { method: 'GET' });
}
export async function addArticle(article: any) {
  const token = localStorage.getItem('token');
  return apiRequest('/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(article)
  });
}
export async function editArticle(id: string, updates: any) {
  const token = localStorage.getItem('token');
  return apiRequest(`/api/articles/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(updates)
  });
}
export async function deleteArticle(id: string) {
  const token = localStorage.getItem('token');
  return apiRequest(`/api/articles/${id}`, {
    method: 'DELETE',
    headers: token ? { Authorization: `Bearer ${token}` } : undefined
  });
}

// Template APIs
export async function getTemplates() {
  const token = localStorage.getItem('token');
  return apiRequest('/api/templates/admin/all', { 
    method: 'GET',
    headers: token ? { Authorization: `Bearer ${token}` } : undefined
  });
}

export async function addTemplate(template: any) {
  const token = localStorage.getItem('token');
  return apiRequest('/api/templates', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(template)
  });
}

export async function editTemplate(id: string, updates: any) {
  const token = localStorage.getItem('token');
  return apiRequest(`/api/templates/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(updates)
  });
}

export async function deleteTemplate(id: string) {
  const token = localStorage.getItem('token');
  return apiRequest(`/api/templates/${id}`, {
    method: 'DELETE',
    headers: token ? { Authorization: `Bearer ${token}` } : undefined
  });
}

// Upload API
export async function getPresignedUrl(filename: string, fileType: string) {
  const token = localStorage.getItem('token');
  return apiRequest('/api/uploads/presign', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({ filename, fileType })
  });
}

export async function uploadFileToS3(url: string, file: File) {
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type
    },
    body: file
  });
  if (!res.ok) throw new Error('Failed to upload file to S3');
  return res;
}

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function apiRequest(path: string, options: RequestInit) {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, options);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'API request failed');
  return data;
}

export async function loginUser(email: string, password: string) {
  return apiRequest('/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
}

// Service APIs
export async function getServices() {
  return apiRequest('/api/services', { method: 'GET' });
}
export async function addService(service: any) {
  const token = localStorage.getItem('token');
  return apiRequest('/api/services', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(service)
  });
}
export async function editService(id: string, updates: any) {
  const token = localStorage.getItem('token');
  return apiRequest(`/api/services/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(updates)
  });
}
export async function deleteService(id: string) {
  const token = localStorage.getItem('token');
  return apiRequest(`/api/services/${id}`, {
    method: 'DELETE',
    headers: token ? { Authorization: `Bearer ${token}` } : undefined
  });
}

// Project APIs
export async function getProjects() {
  return apiRequest('/api/projects', { method: 'GET' });
}
export async function addProject(project: any) {
  const token = localStorage.getItem('token');
  return apiRequest('/api/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(project)
  });
}
export async function editProject(id: string, updates: any) {
  const token = localStorage.getItem('token');
  return apiRequest(`/api/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(updates)
  });
}
export async function deleteProject(id: string) {
  const token = localStorage.getItem('token');
  return apiRequest(`/api/projects/${id}`, {
    method: 'DELETE',
    headers: token ? { Authorization: `Bearer ${token}` } : undefined
  });
}
