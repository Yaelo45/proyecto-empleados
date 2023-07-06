import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './pages/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './pages/editar-empleado/editar-empleado.component';
import { ListarEmpleadosComponent } from './pages/enlistar-empleados/enlistar-empleados.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'crearEmpleado' },
  { path: 'crearEmpleado', component: CrearEmpleadoComponent },
  { path: 'editarEmpleado/:id', component: EditarEmpleadoComponent },
  { path: 'listarEmpleados', component: ListarEmpleadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
