import { Injectable, Inject ,Input} from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Product } from '../ViewModel/product';
import { parse } from 'querystring';
import { maybeQueueResolutionOfComponentResources } from '@angular/core/src/metadata/resource_loading';

const STORAGE_KEY = 'local_todolist';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  anotherTodolist = [];
  cartNumber:number;
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { 
    this.cartNumber=0;
  }
  public storeOnLocalStorage(data: Product): void {
       
       // get array of tasks from local storage
       const currentTodoList = this.storage.get(STORAGE_KEY) || [];
       // push new task to array
       currentTodoList.push(data);
       this.cartNumber++;
       // insert updated array to local storage
       this.storage.set(STORAGE_KEY, currentTodoList);
      
      
  }
        public retrieveLocalStorage():Product[]
       {
         return this.storage.get(STORAGE_KEY);
       }
      // console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
      // console.log('recieved= key:' + STORAGE_KEY);
        // this.storage[STORAGE_KEY]= this.storage.get(STORAGE_KEY);
        // this.storage[STORAGE_KEY];
        public getCartNum():number{
          return this.cartNumber;
        }
      }
     
        
    
    