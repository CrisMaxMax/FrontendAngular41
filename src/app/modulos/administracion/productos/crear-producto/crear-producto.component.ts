import { AdministracionModule } from './../../administracion.module';
import { ModelProducto } from './../../../../modelos/producto.modelo';
import { ProductoService } from './../../../../servicios/producto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  fgValidador: FormGroup=this.fb.group({
    'nombre':['',[Validators.required]],
    'marca':['',[Validators.required]],
    'placa':['',[Validators.required]],
    'tipo_de_vehiculo':['',[Validators.required]],
    'ciudad':['',[Validators.required]],
    'departamento':['',[Validators.required]],
    'imagen':['',[Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
  }
  GuardarPoducto(){
    let modelo = this.fgValidador.controls["modelo"].value;
    let marca = this.fgValidador.controls['marca'].value;
    let placa = this.fgValidador.controls['placa'].value;
    let tipo_de_vehiculo = this.fgValidador.controls['tipo_de_vehiculo'].value;
    let ciudad = this.fgValidador.controls['ciudad'].value;
    let imagen = this.fgValidador.controls["imagen"].value;
    let departamento = this.fgValidador.controls["departamento"].value;

    let p = new ModelProducto();
    p.modelo = modelo;
    p.marca = marca;
    p.placa = placa;
    p.tipo_de_vehiculo = tipo_de_vehiculo;
    p.ciudad= ciudad;
    p.imagen= imagen;
    p.departamento = departamento;
    this.servicioProducto.CrearProducto(p).subscribe((datos: ModelProducto) =>{
      alert("Producto Almacenado correctamente");
      this.router.navigate(["/administracion/buscar-producto"]);
    }, (error: any)=>{
      alert("Error almacenado el producto");
    })
  }
}
