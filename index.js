const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Utility function to generate pipeline steps
 */
const pipelineSteps = [
  "Trigger (push to main)",
  "Get code (checkout repository)",
  "Prepare Node environment",
  "Install dependencies",
  "Run tests",
  "Authenticate with DockerHub",
  "Build Docker image",
  "Push image to registry"
];

/**
 * Root Route
 * Returns professional project information
 */
app.get("/", (req, res) => {
  res.json({
    project: "CI/CD Automation Demo",
    description: "Node.js + Docker + GitHub Actions Integration",
    environment: {
      hostname: os.hostname(),
      platform: os.platform(),
      architecture: os.arch(),
      nodeVersion: process.version
    },
    message: "CI + Docker Automation is running successfully 🚀",
    learningFlow: pipelineSteps
  });
});

/**
 * Health Check Route
 * Used in real-world deployments for monitoring
 */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

/**
 * Pipeline Visualization Route
 * Displays CI/CD flow in structured format
 */
app.get("/pipeline", (req, res) => {
  res.json({
    title: "GitHub Actions CI/CD Flow",
    flow: pipelineSteps.map((step, index) => ({
      stepNumber: index + 1,
      description: step
    }))
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📦 CI/CD Demo Ready`);
});
