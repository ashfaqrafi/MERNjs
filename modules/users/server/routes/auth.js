'use strict';

import express from 'express';

import * as AuthController from '../controllers/auth';

const authRoutes = express.Router();

authRoutes.route('/') // accessed at http://localhost:3000/api/auth
  // create a user (accessed at POST http://localhost:3000/api/auth)
  .post(AuthController.authenticateUser);

export default authRoutes;
