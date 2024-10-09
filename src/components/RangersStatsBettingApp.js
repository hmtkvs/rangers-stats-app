// File: src/components/RangersStatsBettingApp.js

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const RangersStatsBettingApp = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data for charts
  const matchResults = [
    { name: 'Wins', value: 29, percentage: 76.32 },
    { name: 'Draws', value: 5, percentage: 13.16 },
    { name: 'Losses', value: 4, percentage: 10.53 }
  ];

  const homeAwayPerformance = [
    { category: 'Wins', home: 16, away: 13 },
    { category: 'Draws', home: 3, away: 2 },
    { category: 'Losses', home: 0, away: 4 },
    { category: 'Cleansheets', home: 10, away: 6 }
  ];

  const goalStats = [
    { name: 'Goals Scored', value: 93, average: 2.45 },
    { name: 'Goals Conceded', value: 37, average: 0.97 }
  ];

  const scoringConcedingMinutes = [
    { name: '0-15', scored: 9, conceded: 9 },
    { name: '15-30', scored: 10, conceded: 3 },
    { name: '30-45', scored: 17, conceded: 5 },
    { name: '45-60', scored: 21, conceded: 7 },
    { name: '60-75', scored: 15, conceded: 6 },
    { name: '75-90', scored: 21, conceded: 7 }
  ];

  const otherStats = [
    { name: 'Ball Possession %', value: 58.55 },
    { name: 'Corners (Avg per match)', value: 7.11 },
    { name: 'Cleansheets', value: 16 },
    { name: 'Failed To Score', value: 2 },
    { name: 'Both Teams Scored', value: 20 }
  ];

  const overUnderStats = [
    { name: 'Over 0.5', percentage: 100 },
    { name: 'Over 1.5', percentage: 92.11 },
    { name: 'Over 2.5', percentage: 73.68 },
    { name: 'Over 3.5', percentage: 47.37 },
    { name: 'Over 4.5', percentage: 21.05 },
    { name: 'Over 5.5', percentage: 5.26 }
  ];

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Match Results</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={matchResults}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {matchResults.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Goal Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={goalStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="value" fill="#8884d8" name="Total" />
            <Bar yAxisId="right" dataKey="average" fill="#82ca9d" name="Average per Match" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Home vs Away Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={homeAwayPerformance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="home" fill="#8884d8" name="Home" />
            <Bar dataKey="away" fill="#82ca9d" name="Away" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Scoring and Conceding Minutes</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={scoringConcedingMinutes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="scored" stroke="#8884d8" name="Goals Scored" />
            <Line type="monotone" dataKey="conceded" stroke="#82ca9d" name="Goals Conceded" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderBettingInsights = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Over/Under Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={overUnderStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="percentage" fill="#8884d8" name="Percentage of Matches" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Other Betting-Relevant Stats</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={otherStats} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={150} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Rangers Team Statistics Analysis for Betting</h1>
      
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'performance' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('performance')}
        >
          Performance
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'betting' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('betting')}
        >
          Betting Insights
        </button>
      </div>

      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'performance' && renderPerformance()}
      {activeTab === 'betting' && renderBettingInsights()}

      <div className="mt-8 text-left">
        <h2 className="text-2xl font-bold mb-2">Betting Analysis</h2>
        <p className="mb-2">Rangers' strong performance this season offers several interesting betting opportunities:</p>
        <ul className="list-disc pl-5 mb-2">
          <li>With a 76.32% win rate, betting on Rangers to win, especially in home games, could be a generally safe option.</li>
          <li>The team averages 2.45 goals per match while conceding 0.97. This suggests that "over 2.5 goals" bets could be profitable, occurring in 73.68% of matches.</li>
          <li>Both teams have scored in 20 out of 38 matches (52.63%), making "Both Teams to Score" a balanced bet.</li>
          <li>Rangers have kept a clean sheet in 42.11% of their matches, which could make "Rangers to Win to Nil" an interesting option, especially for home games.</li>
          <li>The team tends to score more in the second half, particularly in the 45-60 and 75-90 minute periods. This could make "Second Half Highest Scoring" or "Rangers to Score Last" potentially profitable bets.</li>
          <li>Rangers average 7.11 corners per match, which could make "over" bets on corner markets attractive.</li>
        </ul>
        <p className="mb-2">Keep in mind that Rangers perform slightly better at home, with all 4 losses occurring in away matches. This home/away split should be considered when placing bets.</p>
        <p className="font-bold">Remember: While these statistics provide insights, past performance doesn't guarantee future results. Always gamble responsibly and within your means.</p>
      </div>
    </div>
  );
};

export default RangersStatsBettingApp;
