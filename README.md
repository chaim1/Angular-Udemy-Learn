# Angular-Udemy-Learn

## Basic Angular

* ngIf
* ngFor
* ngModel
* (events)
* [ngStyle]
* [ngClass]
* functions
* ng-template


### Practices - 1
* create worning alert and success alert 
* output a warning or success message in the component
* style the component  

### Practices - 2
* create button that adds div with number
* ngStyle ngIf the number < 5 { backgroundColor }
* ngClass ngIf the backgroundColor / number < 5 { color: width }
* test by index




## Project Course

* basic models
* constractor models
* Adding Navigation with Event Binding and ngIf
* Passing  Data with Property Binding
* Passing  Data with Event and Property Binding (Combined)
* Allowing the User to Add Ingredients to the Shopping List

###





## cmd Databinding Start

*  module introduction
* @Input ('nameInput')
    *[nameInput]

* @Output('nameOutput')
    * onTsC "nameOfThisEvent" = new EventEmitter<{the object from parent component}>();
    * onHTML(event Call The Method On This Component Or 'nameOutput' Call The Method)="Method($event)"
    * emmit() for name of EventEmitterName

* encapsulation
    * ViewEncapsulation
        * Emulated /Default
        * None
        * Native  

* Local References 
    * onHTML #nameElement
        * put nameElement in to method
        * use nameElement eny place
    * onTsC 
        * on method call nameElement: HTMLTypeElement
        * call to nameElement.value
        * @ViewChild('nameElement' Or nemeOfComponent)'nameElement' ~ ElementRef  
            * on method call this nameElement.nativeElement.value
* ng-content
* @ContentChild like @ViewChild
* ngOnChanges
* ngOnInit
    * @ViewChild ~ dont work
    * @ContentChild ~ dont work
* ngDoCheck
* ngAfterContentInit
    * @ContentChild ~  work
* ngAfterContentChecked
* ngAfterViewInit
    * @ViewChild ~ work
* ngAfterViewChecked
* ngOnDestroy


### Practices ~ 1 Practices-Databinding
* create tow buttons start and stop game
* on click start add component on app component whit number take whit @Input 
* and app component give the interval whit @Output
* on click stop kile the interval


## directives-start
*  Module Introduction
* ngFor and ngIf Recap
* ngClass and ngStyle Recap
* ng g directive / ng g d for Directive
* Creating a Basic Attribute Directive
* using with renderer2 to build Attribute Directive // https://angular.io/api/core/Renderer2  
* Using HostListener to Listen to Host Events
* Using HostBinding to Bind to Host Properties