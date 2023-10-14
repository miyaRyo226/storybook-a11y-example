// .storybook/test-runner.ts

import type { TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y } from "axe-playwright"

const config: TestRunnerConfig = {
    // Hook that is executed before the test runner starts running tests
    setup() {
        // Add your configuration here.
    },
    async preRender(page) {
        await injectAxe(page);
    },
    async postRender(page) {
        await checkA11y(page, "#storybook-root", {
            detailedReport: true,
            detailedReportOptions: {
                html: true
            },
        });
    },
};

module.exports = config;