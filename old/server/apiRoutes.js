const express = require('express');

module.exports = (helpers) => {
  const router = express.Router();
  router.get('/properties', (req, res) => {
    helpers.getAllProperties(req.query, 20)
      .then(properties => res.send({ properties }))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  router.get('/reservations', (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.error("💩");
      return;
    }
    helpers.getAllReservations(userId)
      .then(reservations => res.send({ reservations }))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  router.post('/properties', (req, res) => {
    const userId = req.session.userId;
    helpers.addProperty({ ...req.body, owner_id: userId })
      .then(property => {
        res.send(property);
      })
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  return router;
};