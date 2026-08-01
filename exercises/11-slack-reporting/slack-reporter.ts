import type {
  Reporter, FullConfig, Suite, TestCase, TestResult, FullResult
} from '@playwright/test/reporter';

let passCount = 0;
let failCount = 0;

export default class SlackReporter implements Reporter {
  constructor(options: { customOption?: string } = {}) {
    console.log(`my-awesome-reporter setup with customOption set to ${options.customOption}`);
  }

  onBegin(config: FullConfig, suite: Suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
    fetch(process.env.SLACK_WEBHOOK_URL as string, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"text": "Test started!"})
  });
}

//   onTestBegin(test: TestCase) {
//     console.log(`Starting test ${test.title}`);
//   }

  onTestEnd(test: TestCase, result: TestResult) {
    
    // console.log(`Finished test ${test.title}: ${result.status}`);
    if (result.status === 'failed') {
      failCount++;
    } else if (result.status === 'passed') {
      passCount++;
    }
  }

  async onEnd(result: FullResult) {
    console.log(`Status: ${result.status}, /nDuration: ${(result.duration/1000)}s`);
    await fetch(process.env.SLACK_WEBHOOK_URL as string, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          {
            "text": `Status: ${result.status} --- Duration: ${(result.duration/1000)}s --- TotalPassed: ${passCount} --- TotalFailed: ${failCount}`
          }
        )
  });
  }
}