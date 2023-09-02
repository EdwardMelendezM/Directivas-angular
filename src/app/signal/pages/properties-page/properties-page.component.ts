import {Component, computed, effect, signal} from '@angular/core';
import {Data} from "../../interfaces/user.interface";

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public counter = signal(10)

  public user = signal<Data>({
    id:4564,
    first_name:'asdsad',
    avatar:'asdsa',
    email:'asdsad',
    last_name:'asdasd'

  })

  public fullName = computed(()=>{
    return `${this.user().first_name} ${this.user().last_name}`
  })

  public userChangeEffect = effect(()=>{
    console.log('User change effect trigger')
    console.log(this.user().first_name)
  })

  onFieldUpdated(field:keyof Data, value:string){
    // this.user.set({
    //   ...this.user(),
    //   [field]:value
    // })

    this.user.update(current=>{
      return {
        ...current,
        [field]:value
      }
    })
    // this.user.mutate(current=>{
    //   current.first_name= 'Hola mundo'
    // })
  }
}
