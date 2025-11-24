// src/utils/api.js
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export async function getRequest(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "API request failed");
  }
  return res.json();
}

export async function postRequest(endpoint, data) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "API request failed");
  }
  return res.json();
}
