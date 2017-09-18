

import { routes } from "app/app.routes";
import { UsersComponent } from "./users/users.component";

describe('routes', () => {
    it('should cotain the route for /users',()=>{
        expect(routes).toContain({path: 'users', component: UsersComponent});
    });

});