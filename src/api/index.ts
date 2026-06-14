import type { TestRequest, TestResponse, TestRecord, Player } from '../types';

export async function submitTest(data: TestRequest): Promise<TestResponse> {
  const response = await fetch('/api/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getTestRecords(): Promise<{ success: boolean; data: TestRecord[] }> {
  const response = await fetch('/api/test');
  return response.json();
}

export async function getPlayers(): Promise<{ success: boolean; data: Player[] }> {
  const response = await fetch('/api/players');
  return response.json();
}
