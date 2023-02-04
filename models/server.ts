import express, {Application} from 'express';
import  userRoutes from '../routes/usuario';
import cors from 'cors'

import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios : '/api/usuarios'

    }

    constructor(){
        this.app = express();
        
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();

        this.routes();
    }


    async dbConnection(){
        try {
            
            await db.authenticate();
            // await db.sync({force:true});
            
            console.log('Database Online');

        } catch (error) {
            throw new Error;
        }
    }

    middlewares(){
        this.app.use( cors())

        this.app.use( express.json())

        this.app.use(express.static('public'))


    }

    routes(){
        this.app.use( this.apiPaths.usuarios, userRoutes)
    }

    listen(){
        this.app.listen( this.port ,()=>{
            console.log('Servidor corriendo en puerto ' + this.port);
        } )
    }
}
export default Server;