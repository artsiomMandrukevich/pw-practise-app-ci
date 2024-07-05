import { defineConfig, devices } from '@playwright/test';
import type {TestOptions} from './test-options'

require('dotenv').config();

export default defineConfig<TestOptions>({
  fullyParallel: true,
  retries: 1,
  reporter: [
    ['json', {outputFile: 'test-results/jsonReport.xml'}],
    ['junit', {outputFile: 'test-results/junitReport.xml'}],
    ['html']
  ],

  use: {
    globalQaURL: 'https://www.globalsqa.com/demo-site/draganddrop',
    trace: 'on-first-retry'
  },


  projects: [
    {
      name: 'chromium',
    },

    {
      name: 'firefox',
      use: { 
        browserName: 'firefox' 
      },
    },
    // npx playwright test --project=mobile --headed
    {
      name: 'mobile',
      testMatch: '6_testMobile.spec.ts',
      use: {
        ...devices['iPhone 14 Pro']
      }
    }
  ],

  webServer: {
    timeout: 1800000,
    command: 'npm run start',
    url: 'http://localhost:4200/'
  }
});
