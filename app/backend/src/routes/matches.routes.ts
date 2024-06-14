import { Router } from 'express';
import MatchController from '../controllers/MatchController';
import Validations from '../middlewares/validations';

const matchController = new MatchController();

const router = Router();

router.get('/', (req, res) => {
  const { inProgress } = req.query;
  if (inProgress) {
    return matchController.getFilter(req, res);
  }
  return matchController.getAllMatches(req, res);
});

router.patch(
  '/:id/finish',
  Validations.validateToken,
  (req, res) => matchController.finishMatch(req, res),
);

router.patch(
  '/:id',
  Validations.validateToken,
  (req, res) => matchController.updateMatchId(req, res),
);

router.post(
  '/',
  Validations.validateToken,
  Validations.validateMatches,
  (req, res) => matchController.createMatch(req, res),
);

export default router;
