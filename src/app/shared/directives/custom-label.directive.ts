import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective  implements OnInit{

  private _errors?: ValidationErrors | null
  private _color:string = 'red'
  private htmlElement?: ElementRef<HTMLElement>;
  @Input() set color(value:string){
    this._color=value
    this.setStyle()
  }

  @Input() set errors(value:ValidationErrors | null | undefined){
    this._errors=value
    this.setErrorMessage()
  }

  constructor( private el:ElementRef<HTMLElement> ) {
    this.htmlElement = el
  }

  ngOnInit(): void {
    this.setStyle()
  }

  setStyle(){
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color
  }

  setErrorMessage():void{
    if(!this.htmlElement) return;
    if(!this._errors) {
      this.htmlElement.nativeElement.innerText='No hay errores'
      return;
    }
    const errors = Object.keys(this._errors);

    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerText='Este campo es requerido'
      return
    }

    if(errors.includes('minlength')){
      const numeroActual:number = parseInt(this._errors['minlength']['actualLength'])
      const numeroFaltante = parseInt(this._errors['minlength']['requiredLength']) - numeroActual
      this.htmlElement.nativeElement.innerText=`Necesita un minimo de 6 caracteres, le falta ${numeroFaltante}`

      return
    }
    if(errors.includes('email')){

      this.htmlElement.nativeElement.innerText='No tiene formato de email'

      return
    }
    this.htmlElement.nativeElement.innerText='Todo es correcto'


  }
}
