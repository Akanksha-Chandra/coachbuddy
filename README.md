🚀 Project Title
CoachBuddy - Your interview Coach

📌 Problem Statement
Problem Statement 1: Weave AI magic with Groq

🎯 Objective
This platform helps users prepare for interviews by providing real-time feedback on their responses. It analyzes each answer for tone, content, and overall quality, offering personalized scoring and improvement suggestions. 

**What it solves:**
- **Instant Feedback:** No need to wait for a human interviewer or feedback. Get immediate insights into how well you’re answering.
- **Personalized Coaching:** Receive tailored advice based on your performance, focusing on strengths and areas for improvement.
- **Efficient Practice:** With AI-generated follow-up questions and instant analysis, users can practice at their own pace and improve continuously.
- **Track Progress:** Users can track their scores, grades, and feedback over multiple interviews, helping them get better with every session.

This system enhances interview preparation by offering a hands-on, interactive learning experience without the need for a human mentor, saving time and optimizing the learning process.

🧠 Team & Approach
Team Name: SOLO HACKER

Team Members:
Name 1 - Akanksha Chandra
Linkedin - https://www.linkedin.com/in/akanksha-chandra-/
Github - https://github.com/Akanksha-Chandra


Your Approach:
**Why you chose this problem:**  
Interview preparation is crucial, and many candidates struggle with feedback and real-time practice. We aimed to create a platform that provides personalized, interactive, and AI-powered interview coaching.

**Key challenges you addressed:**  
1. **Voice-to-text accuracy**: Ensuring accurate transcription for real-time analysis.
2. **Instant feedback**: Delivering sentiment and content feedback in real-time.
3. **Dynamic interview flow**: Adapting the questions based on user responses.

**Any pivots, brainstorms, or breakthroughs during hacking:**  
- **Pivot**: Switched to **Faster-Whisper** for better transcription accuracy.
- **Breakthrough**: Integrated **Groq-powered analysis** for real-time response evaluation.
- **Dynamic flow**: Developed an adaptive interview system based on each response.

🛠️ Tech Stack
Core Technologies Used:
Frontend: React, Tailwind CSS, Vite
Backend: Node.js, Express.js
Database: MongoDB
APIs: Groq API (for AI analysis), Faster-Whisper (speech-to-text), Hugging Face (sentiment analysis)


Sponsor Technologies Used (if any):
Groq - I used Groq to power the real-time language model analysis for interview responses. Groq's API enabled us to evaluate candidates' answers instantly by analyzing their tone, sentiment, and content quality. This AI-powered feedback helped simulate an actual interview environment, providing users with actionable insights after each answer to improve their performance.

 
**✨ Key Features**

✅ **Real-time Voice-to-Text Conversion**: Accurate transcription of voice responses using Faster-Whisper for seamless interaction.  
✅ **AI-Powered Instant Feedback**: Groq API provides real-time sentiment and tone analysis of user responses.  
✅ **Dynamic Interview Flow**: The interview adapts with follow-up questions based on the user's answers.  
✅ **Comprehensive Report**: After the interview, users receive a detailed report with scores and feedback on their performance.


<img width="959" alt="02" src="https://github.com/user-attachments/assets/8db9bdea-7b77-4df9-b9f3-4a26c3d907e8" />

📽️ Demo & Deliverables
Demo Video Link: (https://youtu.be/Llbx6c_soAY)
Pitch Deck / PPT Link: [Paste Google Slides / PDF link here]

✅ Tasks & Bonus Checklist
 ✅ All members of the team completed the mandatory task - Followed at least 2 of our social channels and filled the form (Details in Participant Manual)
 ✅All members of the team completed Bonus Task 1 - Sharing of Badges and filled the form (2 points) (Details in Participant Manual)
 ✅All members of the team completed Bonus Task 2 - Signing up for Sprint.dev and filled the form (3 points) (Details in Participant Manual)
(Mark with ✅ if completed)

**🧪 How to Run the Project**

**Requirements:**
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Groq API Key** (for AI-powered analysis)
- **Faster-Whisper API Key** (for speech-to-text transcription)
- **.env file** (to store sensitive keys and environment variables)

**Setup Instructions:**

1. **Clone the Repo:**
   ```bash
   git clone (https://github.com/Akanksha-Chandra/coachbuddy/tree/master)
   cd project-name
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set up the .env file:**
   Create a `.env` file in the root directory and add the required API keys:
   ```env
   GROQ_API_KEY=your_groq_api_key
   FASTER_WHISPER_API_KEY=your_faster_whisper_api_key
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

The app should now be running locally at `http://localhost:5173/`.

**Note:** Make sure to replace the API keys with your actual keys from the respective platforms.

**🧬 Future Scope**

- **📈 More Integrations**: Integrate with additional interview platforms like LinkedIn or Glassdoor for job-specific question sets and feedback.
- **🛡️ Security Enhancements**: Improve data encryption, secure API key storage, and implement authentication features to protect user data.
- **🌐 Localization / Broader Accessibility**: Support multiple languages and regional dialects for a global audience. Enhance accessibility features like screen readers or dark mode.
  
**📎 Resources / Credits**

- **APIs Used:**
  - **Groq API**: AI-powered real-time analysis for interview responses.
  - **Faster-Whisper**: Speech-to-text transcription for voice responses.
  - **Hugging Face**: Sentiment and emotion analysis for real-time feedback.

- **Open Source Libraries Referenced:**
  - **React**: Frontend framework for building interactive UIs.
  - **Tailwind CSS**: Utility-first CSS framework for custom design.
  - **Express.js**: Backend framework for building the API server.
  - **MongoDB**: NoSQL database for storing session and user data.
  
- **Acknowledgements**:
  - Special thanks to Groq and Faster-Whisper for their APIs and support throughout the project.

**🏁 Final Words**

As a solo participant, this hackathon journey was both challenging and incredibly rewarding. I had to wear many hats—designing the architecture, coding both the frontend and backend, and integrating the AI APIs. There were moments of frustration, especially with API integrations and fine-tuning the real-time feedback system, but every challenge was an opportunity to learn something new. I’m proud of how everything came together in the end. It was a great experience, and I’m excited to continue developing this project further!
