import { Router } from 'express';
import UserController from '../controllers/UserController';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';

const router: Router = Router();

router.get('/', [checkJwt, checkRole(['ADMIN'])], UserController.listAll);
router.get('/:id([0-9]+)', [checkJwt, checkRole(['ADMIN'])], UserController.getOneById);
router.patch('/:id([0-9]+)', [checkJwt, checkRole(['ADMIN'])], UserController.editUser);
router.delete('/:id([0-9]+)', [checkJwt, checkRole(['ADMIN'])], UserController.deleteUser);
router.post('/', [checkJwt, checkRole(['ADMIN'])], UserController.add);

export default router;
