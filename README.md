
# Project Setup Instructions

## Table of Contents
1. [Backend Setup](#backend-setup)
2. [Frontend Setup](#frontend-setup)
3. [Run the Application](#run-the-application)
4. [Folder Structure](#folder-structure)


---

## Backend Setup

### Prerequisites
Make sure you have the following installed on your system:
- Python 3.8+
- MongoDB (running locally or on the cloud)
- FastAPI
- PyMongo

### Steps to Setup Backend

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Chetan-Jalandharia/waterdip-assignment
   cd /backend
   ```

2. **Create a Virtual Environment**  
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

3. **Install Dependencies**  
   Install the required Python packages using `pip`:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the FastAPI Backend**  
   Start the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

5. **API Documentation**  

   Use the POSTMAN file in backend to test and run the APIs and see their responses OR
   Once the backend is running, you can view the API documentation at:
   ```
   http://127.0.0.1:8000/docs
   ```

---

## Frontend Setup

### Prerequisites
Make sure you have the following installed on your system:
- Node.js (version 14+)
- npm or yarn

### Steps to Setup Frontend

1. **Navigate to the Frontend Folder**  
   ```bash
   cd /frontend
   ```

2. **Install Dependencies**  
   Install the required packages using `npm` or `yarn`:
   ```bash
   npm install  # or yarn install
   ```

3. **Run the Development Server**  
   Start the Vite development server:
   ```bash
   npm run dev  # or yarn dev
   ```

4. **Access the Frontend**  
   You can access the React app at:
   ```
   http://localhost:5173/
   ```

---

## Run the Application

1. **Backend:** Ensure that the FastAPI backend is running at `http://127.0.0.1:8000`.
2. **Frontend:** Ensure that the React app is running at ` http://localhost:5173`.

The frontend should be connected to the backend via API calls.

---

## Folder Structure

```bash
your-repo-folder
│
├── backend/               # Backend folder (Python FastAPI)
│   ├── app/
│   ├── main.py
│   ├── requirements.txt   # Python dependencies  
│
├── frontend/              # Frontend folder (React.js Vite)
│   ├── src/
│   ├── vite.config.js
│   ├── package.json       # JavaScript dependencies
│   └── .env               # Environment variables (not committed to Git)
│
└── README.md              # Setup instructions
```

---

## Dependencies

### Backend
- FastAPI
- PyMongo
- Uvicorn (for running the FastAPI app)

### Frontend
- React.js
- Vite
- Axios (for API calls)
