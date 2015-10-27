var reporter = require('../../src/CucumberJSAllureReporter.js');

reporter.config(
    {targetDir: 'allure-Test',
    labels : {
        feature: [/sprint-(\d*)/, /release-(\d)/, /area-(.*)/],
        issues: [/bug-(\d*)/]
    }}
);

module.exports = reporter;
