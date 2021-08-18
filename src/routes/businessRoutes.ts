import { Router } from "express";
import { BusinessController } from "../controllers/businessController";
import { AuthController } from "../controllers/authController";


export class BusinessRoutes {

    public router: Router;
    public BusinessController: BusinessController = new BusinessController();
    public authController: AuthController = new AuthController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        // this.router.get("/", this.productController.getProducts);
        // this.router.get("/:id", this.productController.getProduct);
        this.router.post("/", this.BusinessController.createBusiness);
        // this.router.put("/:id", this.authController.authenticateJWT, this.productController.updateProduct);
        // this.router.delete("/:id", this.authController.authenticateJWT, this.productController.deleteProduct);
    }
}