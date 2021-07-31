const pool = require('../../db');
const queries = require('./queries');

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  // check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send('Email already registered!');
    }

    // add student to database
    pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
      if (error) throw error;
      res.status(201).send('User created Successfully!');
    });
  });
};

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.removeStudent, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send('User does not exist in the database, cold not remove.');
    }

    pool.query(queries.removeStudent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send('User removed successfully.');
    });
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send('User does not exist in the database, can not edit.');
    }

    pool.query(queries.updateStudent, [name, id], (error, result) => {
      if (error) throw error;
      res.status(200).send('User updated successfully.');
    });
  });
};

module.exports = {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  removeStudent,
};
