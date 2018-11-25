
  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'filter'
  })
export class FilterPipePipe implements PipeTransform {

    transform(value: any, args?: any): any {
      if(!args){
        return value;
      }else{
      
        args = args.toUpperCase();
        console.log(args)
        
      }
   
    return value.filter(item=>
    //  item.topic.toUpperCase().startsWith(args) == true||
     item.district.toUpperCase().startsWith(args) == true ||
     item.town.toUpperCase().startsWith(args) == true
      
    );
    }
  }
  
  @Pipe({
    name: 'filters'
  })
  export class FilterPipes implements PipeTransform {
  
    transform(value: any, args?: any): any {
      if(!args){
        return value;
      }else{
      
        args = args.toUpperCase();
        
      }
   
    return value.filter(item=>
      item.topic.toUpperCase().startsWith(args) == true
      
    );
    }
  }