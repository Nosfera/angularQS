#On this git repository I will check the setbacks and common issues on implementing Angular

While working in a MEAN project I found many differences on how Angular 2 was implemented and the current standards. Then I decided to compleate the stadard *"Quick start"* provided in [Angular Website](https://angular.io/guide/quickstart).

Then I decided to create different branches were I will be exploring the paths they have defined

1. First steps
2. Tour of Heroes
2. Issues
3. Quick ideas implementation

1. Learned
	* on save the project uses webpack to compile and refresh the app on browser
	* where the app lives? in SRC folder
		/app
		* Has css, html and TypeScript files
		For Sublime it's recommended this [package](https://packagecontrol.io/packages/TypeScript).
		you dont know how to install that package? --> check [Package control](https://packagecontrol.io/docs/usage)
	* AppComponent: main/root component in app.component[files]
	* AppModule: root module to declare components in app.module.ts


Actually you can read more from the quickstart...

	* assets/ folder: really don't need too much explanation --> is a folder where you will put all your assets such as images
	* environments/ folder: where you will set the destination environments (develpment production mock services...)

2.  App will:
	* Display a list of heroes
	* Editing a selected hero's detail
	* Navigating among different views of heroic data.

	Meaning: Create directives => to show and hide elements and display lists of hero data
	Create components => to display hero details and show an array of heroes.

	Covering: 
	* one-way data binding for read-only data
	* two-way data binding => editable fields to update a model with
	* bind component methods to user events (mouse/keyboard)
	* format data with pipes
	* service creation to assemble the heroes
	* routing to navigate

* The hero editor

a. Quick start Angular app
```
git clone https://github.com/angular/quickstart.git quickstart
cd quickstart
npm install
npm start
```

There you should give a look to the package.json file that will show you the main dependencies this project has

I found protactor is intended for app testign [link](http://www.protractortest.org/#/), also finding karma [link](https://angular-2-training-book.rangle.io/handout/testing/intro-to-tdd/setup/karma-config.html) fullfilling some these activities as well

bs-config is to set up a middleware server
and tslint --> When using the CLI or many third-party tools, a file named tslint.json is used to configure which rules get run.

**bootstap array**
Bootstrapping: bootstrapping process creates the component(s) [each designed on tree of components] listed in the bootstrap array and inserts each one into the browser DOM

/src/app
1. Define a component in app.component.ts (styles and templates tree structure css, html, ts)
	* selector: 'app-root',

2. Bostrap on main.ts
/src/
main.ts
-  { AppModule } Instantiation and insertion of the component on a TAG id choosen in app.component.ts as *selector*
- { environment } execution environment --> 'app-root' --> Renders in index.html (in 'production' mode)

.bootstrapModule(AppModule);

3. app.module.ts
- import ngModel FormsModule to use two-way binding on input field to work with new Hero class data model. (2 lines)