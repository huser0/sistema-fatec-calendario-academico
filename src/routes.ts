// Importa componentes do express 
import {Router} from 'express'; 
import validarDadosItemCalendario from './middlewares/validarDadosItemCalendario';
import CalendarioAcademicoController from './controllers/CalendarioAcademico';
// Importa TesteController 

// Validação dos parâmetos da rota 
// Instancia roteador 
const Roteador = Router(); 
const calendario = new CalendarioAcademicoController()


Roteador.get('/produtos', calendario.getAll); 
Roteador.get('/produtos/:id', calendario.getItem); 
Roteador.post('/produtos', calendario.createItem); 
Roteador.put('/produtos/:id', calendario.updateItem); 
Roteador.delete('/produtos/:id', calendario.deleteItem);

export default Roteador;