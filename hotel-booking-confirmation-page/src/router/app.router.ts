import { createBrowserRouter } from "react-router";
import StayPage from "../pages/stay/StayPage";
import AppLayout from "../layouts/app/AppLayout";

const router = createBrowserRouter([
    {
        Component: AppLayout,
        children: [
            {
                index: true,
                Component: StayPage
            }
        ]        
    }
]);

export default router;