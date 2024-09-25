/// <reference lib="webworker" />

import { interval } from 'rxjs';

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});

// setInterval(() => {
//   postMessage(`interval from worker`);
// }, 1000);

interval(1000).subscribe((a) => postMessage(`interval from worker: ${a}`));
