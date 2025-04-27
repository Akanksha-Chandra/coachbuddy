import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getReport } from '../services/api'; // your API

const Report = () => {
  const location = useLocation();
  const sessionId = location.state?.sessionId;

  const [reportData, setReportData] = useState(null);

  // Function to generate dynamic feedback based on score
  const generateDynamicFeedback = (averageScore) => {
    if (averageScore >= 8) {
      return "Excellent! You have performed well, keep it up!";
    } else if (averageScore >= 6) {
      return "Good job! You are on the right track, but there's room for improvement.";
    } else if (averageScore >= 4) {
      return "Fair attempt, consider revising your answers and practicing more.";
    } else {
      return "Needs improvement. Take some time to review and practice.";
    }
  };

  useEffect(() => {
    const fetchReport = async () => {
      if (!sessionId) return;
      try {
        const res = await getReport(sessionId);
        console.log('📄 Report Response:', res.data);
        setReportData(res?.data || {});
      } catch (err) {
        console.error('❌ Failed to fetch report:', err);
      }
    };
    fetchReport();
  }, [sessionId]);

  if (!sessionId) {
    return <div className="text-center py-20">❌ No session found. Please start an interview first.</div>;
  }

  const score = reportData?.averageScore || 0;
  const feedbackSummary = reportData?.feedbackSummary || generateDynamicFeedback(score);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-6">
      <div className="max-w-4xl w-full px-6 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Interview Report</h1>

        {reportData ? (
          <div className="space-y-6">
            {/* Role Section */}
            <div className="flex justify-between">
              <p className="font-semibold"><strong>Role Chosen:</strong> {reportData.role ?? 'N/A'}</p>
            </div>

            {/* Score and Grade */}
            <div className="flex justify-between">
              <p className="font-semibold"><strong>Overall Score:</strong> {score} / 10</p>
              <p className="font-semibold"><strong>Grade:</strong> {reportData.grade ?? 'N/A'}</p>
            </div>

            {/* Feedback Section */}
            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <h2 className="text-xl font-semibold mb-2">Feedback Summary:</h2>
              <p className="whitespace-pre-line text-lg text-gray-700">{feedbackSummary}</p>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">Loading Report...</div>
        )}
      </div>
    </div>
  );
};

export default Report;
