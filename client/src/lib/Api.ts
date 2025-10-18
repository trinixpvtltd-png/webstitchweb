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
