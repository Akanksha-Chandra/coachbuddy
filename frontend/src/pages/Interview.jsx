import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // 🆕 import navigate
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuestionCard from '../components/QuestionCard';
import TranscriptViewer from '../components/TranscriptViewer';
import FeedbackPanel from '../components/FeedbackPanel';
import ScoreBoard from '../components/ScoreBoard';
import VoiceTextToggle from '../components/VoiceTextToggle';
import useSpeechToText from '../hooks/useSpeechToText';
import { getNextQuestion, analyzeResponse, startInterview } from '../services/api';

const Interview = () => {
  const location = useLocation();
  const navigate = useNavigate(); // 🆕 initialize navigate
  const selectedRole = location.state?.role || "Frontend Developer";

  const [question, setQuestion] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(true);
  const [textAnswer, setTextAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const { transcript, startListening, stopListening } = useSpeechToText();

  const toggleMode = () => {
    setIsVoiceMode(prev => !prev);
    if (isVoiceMode) stopListening();
    else startListening();
  };

  const handleSubmit = async () => {
    if (!sessionId) return;

    const responseText = isVoiceMode ? transcript : textAnswer;
    if (!responseText.trim()) return alert("Please provide a response!");

    try {
      setLoading(true);
      const res = await analyzeResponse(sessionId, responseText);
      setFeedback(res?.data?.feedback || {});
      setAnalysis(res?.data?.analysis || {});

      const nextQ = await getNextQuestion(sessionId);
      setQuestion(nextQ?.data?.question || '🎉 Interview completed.');
      setTextAnswer('');
    } catch (err) {
      console.error("❌ Error submitting response:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAbort = () => {
    if (isVoiceMode) stopListening();
    navigate('/report', { state: { sessionId } });
  };

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        const res = await startInterview(selectedRole);
        setSessionId(res?.data?.sessionId);
        setQuestion(res?.data?.question || 'No question loaded.');
      } catch (err) {
        console.error("❌ Failed to start interview:", err);
        alert("Could not start the interview. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [selectedRole]);

  useEffect(() => {
    isVoiceMode ? startListening() : stopListening();
  }, [isVoiceMode]);

  useEffect(() => {
    if (question === '🎉 Interview completed.') {
      navigate('/report', { state: { sessionId } });
    }
  }, [question, navigate, sessionId]);

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold text-gray-800">
            Interview Dashboard - {selectedRole}
          </h1>
          <VoiceTextToggle isVoiceMode={isVoiceMode} toggleMode={toggleMode} />
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading...</div>
        ) : (
          <>
            <QuestionCard question={question} />

            {question !== '🎉 Interview completed.' && !isVoiceMode && (
              <textarea
                className="w-full mt-4 p-3 border rounded-md"
                placeholder="Type your answer here..."
                rows={4}
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
              />
            )}

            {question !== '🎉 Interview completed.' && (
              <TranscriptViewer transcript={isVoiceMode ? transcript : ''} />
            )}

            {question !== '🎉 Interview completed.' && (
              <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                <button
                  className="px-6 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 disabled:opacity-50"
                  onClick={handleSubmit}
                  disabled={loading || !textAnswer.trim()}
                >
                  Submit Answer
                </button>

                <button
                  className="px-6 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700 disabled:opacity-50"
                  onClick={handleAbort}
                >
                  Abort Interview
                </button>
              </div>
            )}

            <FeedbackPanel feedback={feedback} />
            <ScoreBoard analysis={analysis} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Interview;
