import http from 'k6/http';
import { sleep, check } from 'k6';
export const options = { vus: 50, duration: '1m' };
export default function () {
  const res = http.get('http://localhost:8080');
  check(res, { 'status is 200': r => r.status === 200 });
  sleep(1);
}
