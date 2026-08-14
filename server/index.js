import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample API Route
app.get('/api/metrics', (req, res) => {
  res.json({
    totalViews: "24,512",
    activeUsers: "1,429",
    taskCompletion: "98.2%",
    systemStatus: "Optimal"
  });
});

app.get('/api/activities', (req, res) => {
  res.json([
    { id: 1, item: "System Integration", category: "Development", status: "In Progress", date: "Aug 14, 2026" },
    { id: 2, item: "UI Refactor & Theme", category: "Design", status: "Completed", date: "Aug 13, 2026" },
    { id: 3, item: "Database Optimization", category: "Infrastructure", status: "Pending Review", date: "Aug 12, 2026" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
