import React, { useState } from 'react';

function App() {
  const [subjects, setSubjects] = useState([
    { name: 'ReactJS', score:''},
    { name: 'ASP.NET', score:''},
    { name: 'Flutter', score:''},
    { name: 'Project', score:''},
    { name: 'GE', score:''},
  ]);

  const [result, setResult] = useState({ total: 0, percentage: 0, grade: '' });
//   const [newSubject, setNewSubject] = useState('');

  const handleScoreChange = (index, newScore) => {
    const updated = [...subjects];
    updated[index].score = newScore;
    setSubjects(updated);
  };

//   const handleAddSubject = () => {
//     if (newSubject.trim() === '') return;
//     setSubjects([...subjects, { name: newSubject, score: 0 }]);
//     setNewSubject('');
//   };

  const calculateResults = () => {
    const total = subjects.reduce((sum, subj) => sum + subj.score, 0);
    const percentage = (total / (subjects.length * 100)) * 100;

    let grade = '';
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B+';
    else if (percentage >= 60) grade = 'B';
    else if (percentage >= 50) grade = 'C';
    else grade = 'F';

    setResult({ total, percentage: percentage.toFixed(2), grade });
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Student Marksheet</h2>

      {subjects.map((subject, index) => (
        <div key={index} style={styles.inputRow}>
          <label style={styles.label}>{subject.name}:</label>
          <input
            type="number"
            value={subject.score}
            onChange={(e) => handleScoreChange(index, Number(e.target.value))}
            style={styles.input}
          />
        </div>
      ))}

      {/* <div style={styles.addRow}>
        <input
          type="text"
          placeholder="New subject name"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddSubject} style={styles.addBtn}>Add Subject</button>
      </div> */}

      <button onClick={calculateResults} style={styles.button}>Generate</button>

      <div style={styles.results}>
        <div style={styles.resultItem}><strong>Total Marks:</strong> {result.total}</div>
        <div style={styles.resultItem}><strong>Percentage:</strong> {result.percentage}%</div>
        <div style={styles.resultItem}><strong>Grade:</strong> {result.grade}</div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#f9f9f9',
    border: '2px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '400px',
    margin: '40px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  label: {
    fontWeight: '500',
    color: '#555',
  },
  input: {
    width: '120px',
    padding: '4px',
    border: '1px solid #ccc',
    borderRadius: '6px',
  },
  addRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  addBtn: {
    padding: '6px 10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#0078D4',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  results: {
    backgroundColor: '#fff',
    borderTop: '1px solid #ccc',
    paddingTop: '10px',
  },
  resultItem: {
    marginBottom: '8px',
    fontSize: '16px',
    color: '#333',
  },
};

export default App;
