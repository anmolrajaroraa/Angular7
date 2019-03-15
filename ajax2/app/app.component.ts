import { Component,OnInit } from '@angular/core';
import { interval, fromEvent,Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxapp';
  arr:[];
  obs1:Observable<any>;
  obs2:Observable<any>;
  doInterval(){
    var obs = interval(2000);
    obs.subscribe(data=>{
      console.log("Data is ",data);
    },err=>{
      console.log("Error is ",err);
    },()=>{
      console.log("Stream End ");
    })
  }
  callService(){
    var w:Observable<any> = this.getMobiles();
    var ww = w.pipe(map(d=>{
      console.log("D is ",d);
      return d["mobiles"];
    }));
    // var ww = w.map(d=>{
    //   console.log("D is ",d);
    //   return d["mobiles"];
    // });
    ww.subscribe(data=>{
      console.log("Data is ",data);
      this.arr = data;
    },er=>{
      console.log("Error is ",er);
    },()=>{
      console.log("COMP ");
    })
  }
  getMobiles(){
    return  Observable.create(obs=>{
      fetch("https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json").then(response=>{
        return response.json();
      }).then(data=>{
        obs.next(data);
        obs.complete();
      }).catch(e=>{
        obs.error(e);
      })
    })

  }
  disconnect(){
    console.log("Obs1 ",this.obs2);
    this.obs2.unsubscribe();
  }
  doClick(){
    var bt2 = document.querySelector("#bt2");
     this.obs1 = fromEvent(bt2,"click");
    this.obs2= this.obs1.subscribe(data=>{
      console.log("Data is ",data);
    },err=>{
      console.log("Error is ",err);
    }, ()=>{
       console.log("Completed ");
    });

    this.obs1.subscribe(data=>{
      console.log("Data is ::::: ",data);
    },err=>{
      console.log("Error is ",err);
    }, ()=>{
       console.log("Completed ");
    });

  }
  streamingdemo(){

    document.querySelector("#bt").addEventListener("click",(event)=>{
      var counter = 1;
      console.log("Event Rec is ",event);
      setTimeout(()=>{
        console.log("TimeOut ");
        setInterval(()=>{
          console.log("Interval Start ",counter);
          counter++;
        },1000)
      })
      },5000);

  }
  ngOnInit(){
    this.doClick();
    this.streamingdemo();
  }
}
