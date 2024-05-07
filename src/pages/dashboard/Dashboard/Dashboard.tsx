import { PieChart, Pie, Tooltip } from "recharts";

const categories = [
  { name: "Education", value: 400 },
  { name: "Health", value: 300 },
  { name: "Environment", value: 300 },
  { name: "Poverty Alleviation", value: 200 },
  { name: "Arts & Culture", value: 278 },
  { name: "Disaster Relief", value: 189 },
];

const posts = [
  { name: "Educational Scholarships", value: 2400 },
  { name: "Medical Relief Fund", value: 4567 },
  { name: "Environmental Conservation Project", value: 1398 },
  { name: "Poverty Alleviation Initiative", value: 9800 },
  { name: "Arts & Music Education Program", value: 3908 },
  { name: "Disaster Relief Efforts", value: 4800 },
];

const Dashboard = () => {
  return (
    <div className="flex justify-center text-center">
      <div className="md:flex justify-between">
        <div>
          <h2 className="text-center text-gray-800 font-mono">
            Visualization Based on Category
          </h2>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={categories}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />

            <Tooltip />
          </PieChart>
        </div>
        <div>
          <PieChart width={300} height={400}>
            <Pie
              dataKey="value"
              data={posts}
              cx={200}
              cy={200}
              innerRadius={40}
              outerRadius={80}
              fill="#82ca9d"
            />
            <Tooltip />
          </PieChart>
          <h2 className="text-center text-gray-800 font-mono">
            Visualization Based on Individual Post. <br />
            Hover to see more info
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
