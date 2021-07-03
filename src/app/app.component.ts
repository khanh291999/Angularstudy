import { Component } from '@angular/core';

function log(target: any, name: any, descriptor: any){
  console.log(target, name, descriptor)
  //store the original function in variable
  const original =descriptor.value
  //do some manipulations with descriptor.value
  descriptor.value = function(...args: any){
    console.log("Arguments", args, "were passed in this function");
    const result = original.apply(this, args)
    console.log("The result of the function is", result)
    return result
  }
  //return the descriptor
  return descriptor
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';

  constructor() {
    console.log("This statement was generated by the constructor", this.aSimpleMethod(5, 2))
  }

  @log
  aSimpleMethod(a: number, b: number){
    return a*b
  }
}
